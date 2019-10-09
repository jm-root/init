let fs = require('fs')
let _ = require('lodash')
const defaultDir = require('path').join(__dirname, '/../../../../config/acl')

function processResource (o) {
  let n = _.pick(o, 'code', 'title', 'permissions', 'sort')
  let v = _.pick(o, 'children').children
  if (v) {
    n.children = []
    v.forEach(function (o) {
      n.children.push(processResource(o))
    })
  }
  return n
}

// function   processRole (o) {
//   let n = _.pick(o, 'code', 'title', 'permissions', 'sort')
//   let v = _.pick(o, 'children').children
//   if (v) {
//     n.children = []
//     v.forEach(function (o) {
//       n.children.push(processResource(o))
//     })
//   }
//   return n
// }

module.exports = class extends require('service') {
  constructor (opts = {}) {
    super(opts)
    this.defaultAcl = opts.defaultAcl
    this.bind('acl')
    this.emit('ready')
  }

  async exportResources (dir = defaultDir) {
    const docs = await this.acl.get('/resources/tree')
    let v = []
    docs.rows.forEach(function (o) {
      v.push(processResource(o))
    })
    fs.writeFileSync(dir + '/resources.json', JSON.stringify(v, null, 2), 'utf8')
    return v
  }

  // async exportRoles(dir = defaultDir) {
  //   const docs = await this.acl.get('/roles')
  //   let v = []
  //   docs.rows.forEach(function (o) {
  //     v.push(processRole(o))
  //   })
  //   console.log(JSON.stringify(v, null, 2))
  //   return v
  // }

  async initAcl () {
    return this.acl.post('/init', this.defaultAcl)
  }

  async init () {
    const ret = {}
    await this.initAcl()
    ret.acl = true
    return ret
  }
}
