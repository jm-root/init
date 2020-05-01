module.exports = class extends require('service') {
  constructor (opts = {}) {
    super(opts)
    this.defaultCts = opts.defaultCts
    this.onReady()
      .then(() => {
        const { gateway } = this
        gateway.bind('bank')
      })
  }

  router (opts) {
    const dir = `${__dirname}/../router`
    return this.loadRouter(dir, opts)
  }

  async initCts () {
    const { bank } = this.gateway
    const cts = this.defaultCts
    const v = []
    for (let { code, name } of cts) {
      const doc = await bank.post(`/cts`, { code, name })
      v.push(doc)
    }
    return { ret: v }
  }

  async init () {
    const ret = {}
    await this.initCts()
    ret.initCts = true
    return ret
  }
}
