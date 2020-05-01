module.exports = class extends require('service') {
  constructor (opts = {}) {
    super(opts)
    this.defaultGateway = opts.defaultGateway
    this.onReady()
      .then(() => {
        this.gateway.bind('config')
      })
  }

  router (opts) {
    const dir = `${__dirname}/../router`
    return this.loadRouter(dir, opts)
  }

  async initRoot () {
    const { config } = this.gateway
    return config
      .post('/root:config:roots/gateway', { value: { title: '路由配置' } })
  }

  async initGateway (opts = {}) {
    const { config } = this.gateway
    const value = Object.keys(opts).length ? opts : this.defaultGateway
    await this.initRoot()
    await config.post('/gateway/modules', { value })
    return config.get('/gateway/modules')
  }

  async init () {
    const ret = {}
    await this.initRoot()
    ret.root = true
    await this.initGateway()
    ret.gateway = true
    return ret
  }
}
