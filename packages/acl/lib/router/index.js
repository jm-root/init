const { ms } = require('jm-server')

module.exports = function (service) {
  async function init () {
    return service.init()
  }

  async function exportAclConfig () {
    return service.exportAclConfig()
  }

  async function convert01 ({ data }) {
    return service.convert01(data)
  }

  const router = ms.router()
  router
    .add('/init', 'get', init)
    .add('/export', 'get', exportAclConfig)
    .add('/convert01', 'post', convert01)

  return router
}
