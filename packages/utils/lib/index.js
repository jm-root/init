const path = require('path')
const fs = require('fs')
const MS = require('jm-ms-core')
const log = require('jm-log4js')
const genId = require('./genId')
const { downloadBase64 } = require('./download')
const { md5, sha256 } = require('./crypt')

const logger = log.getLogger('main')
let ms = new MS()

module.exports = {
  genId,
  downloadBase64,
  md5,
  sha256,

  autoLoadRouter (service, dir) {
    const router = ms.router()
    fs
      .readdirSync(dir)
      .filter(function (file) {
        return (file.indexOf('.js') !== 0) && (file !== 'index.js') && (file !== 'help.js')
      })
      .forEach(file => {
        const key = path.basename(file, '.js')
        logger.debug(`load router ${dir}/${key}`)
        const r = require(`${dir}/${key}`)(service)
        const prefix = r.prefix || `/${key}s`
        router.use(prefix, r)
      })

    return router
  }

}
