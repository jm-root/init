module.exports = class extends require('service') {
  constructor (opts = {}) {
    super(opts)
    this.defaultGateway = opts.defaultGateway
    this.bind('config')
    this.emit('ready')
  }

  async initRoot () {
    return this.config
      .post('/root:config:roots/gateway', { value: { title: '路由配置' } })
  }

  async initGateway (opts = {}) {
    const value = Object.keys(opts).length ? opts : this.defaultGateway
    await this.initRoot()
    await this.config.post('/gateway/modules', { value })
    return this.config.get('/gateway/modules')
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
