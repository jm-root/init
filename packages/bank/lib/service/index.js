module.exports = class extends require('service') {
  constructor (opts = {}) {
    super(opts)
    this.defaultCts = opts.defaultCts
    this.bind('bank')
    this.emit('ready')
  }

  async initCts () {
    const cts = this.defaultCts
    const v = []
    for (let { code, name } of cts) {
      const doc = await this.bank.post(`/cts`, { code, name })
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
