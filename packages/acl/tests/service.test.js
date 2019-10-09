const $ = require('./service')

let service = null
beforeAll(async () => {
  await $.onReady()
  service = $
})

describe('service', () => {
  test('init', async () => {
    service.init()
  })
  test('exportResources', async () => {
    service.exportResources()
  })
})
