const Router = require('router')

module.exports = function (opts = {}) {
  const service = this
  const router = new Router(service, { dir: __dirname, ...opts }).router

  async function init (opts) {
    return service.init()
  }

  router.add('/init', 'get', init)

  return router
}
