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

  test('exportAclConfig', async () => {
    const doc = await service.exportAclConfig()
    console.log(JSON.stringify(doc, null, 2))
  })

  test('convert01', async () => {
    const doc = service.convert01(service.defaultAclConfig)
    console.log(JSON.stringify(doc, null, 2))
  })
})
