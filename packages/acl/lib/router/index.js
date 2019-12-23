const Router = require('router')

module.exports = function (opts = {}) {
  const service = this
  const router = new Router(service, { dir: __dirname, ...opts }).router

  async function init (opts) {
    return service.init()
  }

  async function exportAclConfig () {
    return service.exportAclConfig()
  }

  async function convert01 ({ data }) {
    return service.convert01(data)
  }

  router
    .add('/init', 'get', init)
    .add('/export', 'get', exportAclConfig)
    .add('/convert01', 'post', convert01)

  return router
}
