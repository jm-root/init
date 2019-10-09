const $ = require('./service')

let router = null
beforeAll(async () => {
  await $.onReady()
  router = $.router()
})

describe('router', () => {
  test('init', async () => {
    let doc = await router.get('/init')
    console.log(doc)
    expect(doc).toBeTruthy()
  })
})
