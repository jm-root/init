const semver = require('semver')

module.exports = class extends require('service') {
  constructor (opts = {}) {
    super(opts)
    this.defaultUsers = opts.defaultUsers
    this.bind('user')
    this.bind('passport')
    this.bind('acl')
    this.emit('ready')
  }

  async initUsers () {
    const { user, acl } = this
    const users = this.defaultUsers
    const v = []
    for (let { account, id: _id, nick, password, roles } of users) {
      nick || (nick = account)
      password || (password = '123')
      let doc = await user.get(`/users/${account}/exists`)
      if (doc && doc.ret) {
        await user.delete(`/users/${doc.ret}`)
        await acl.delete(`/users/${doc.ret}`)
      }
      doc = await this.passport.post('/register', { account, _id, nick, password })

      await acl.post('/users', {
        _id,
        nick,
        roles
      })

      const { version: aclVer } = await acl.get('/')
      if (semver.satisfies(aclVer, '0.x')) {
        await acl.put(`/users/${_id}/roles`, { roles })
      }

      v.push(doc)
    }
    return { ret: v }
  }

  async init () {
    const ret = {}
    await this.initUsers()
    ret.initUsers = true
    return ret
  }
}
