const semver = require('semver')
// let fs = require('fs')
const defaultDir = require('path').join(__dirname, '/../../../../config/acl')
const { convert01 } = require('./convert')

module.exports = class extends require('service') {
  constructor (opts = {}) {
    super(opts)
    const { defaultAclConfig, defaultAclConfigVer1 } = opts
    Object.assign(this, {
      defaultAclConfig,
      defaultAclConfigVer1,

      convert01
    })
    this.bind('acl')
    this.emit('ready')
  }

  async getVersion () {
    const { version } = await this.acl.get('/')
    return version
  }

  async exportAclConfig (dir = defaultDir) {
    const { acl } = this
    const ver = await this.getVersion()
    let fn = null
    let doc = null
    if (semver.satisfies(ver, '1.x')) {
      fn = require('./export_1')(acl)
      console.log(fn)
      doc = await fn()
      doc.version = 1
      // const s = JSON.stringify(doc, null, 2)
      // fs.writeFileSync(`${dir}/config_1.js`, `module.exports = ${s}`, 'utf8')
    } else {
      fn = require('./export')(acl)
      doc = await fn()
      // const s = JSON.stringify(doc, null, 2)
      // fs.writeFileSync(`${dir}/config.js`, `module.exports = ${s}`, 'utf8')
    }

    return doc
  }

  async initAcl () {
    const ver = await this.getVersion()
    if (semver.satisfies(ver, '1.x')) {
      return this.acl.post('/init', this.defaultAclConfigVer1)
    } else {
      return this.acl.post('/init', this.defaultAclConfig)
    }
  }

  async init () {
    const ret = {}
    await this.initAcl()
    ret.acl = true
    return ret
  }
}
