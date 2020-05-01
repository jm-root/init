const { ms } = require('jm-server')

module.exports = function (service) {
  async function init (opts) {
    return service.init()
  }

  const router = ms.router()
  router.add('/init', 'get', init)

  return router
}
