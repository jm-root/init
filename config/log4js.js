module.exports = {
  appenders: {
    console: { type: 'console' },
    init: {
      type: 'dateFile',
      filename: 'logs/init',
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: { appenders: [ 'console' ], level: 'info' },
    init: { appenders: [ 'console', 'init' ], level: 'info' }
  }
}
