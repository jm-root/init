function processResource (o) {
  let { code, title, permissions, noRecursion, sort, children: v } = o
  noRecursion || (noRecursion = undefined)
  sort || (sort = undefined)
  let n = { code, title, permissions, noRecursion, sort }
  if (v) {
    n.children = []
    v.forEach(function (item) {
      n.children.push(processResource(item))
    })
  }
  return n
}

module.exports = function (acl) {
  async function exportPermissions () {
    const docs = await acl.get('/permissions')
    return docs.rows.map(({ code, title }) => ({ code, title }))
  }

  async function exportResources () {
    const { rows } = await acl.get('/resources/tree')
    return rows.map(processResource)
  }

  function processRoles (o) {
    let { code, title, description, parents, allows } = o
    const v = Object.keys(allows).map(key => {
      return {
        resource: key,
        permissions: allows[key]
      }
    })
    return { code, title, description, parents, allows: v }
  }

  async function exportRoles () {
    const { rows } = await acl.get('/roles')
    for (const item of rows) {
      const allows = await acl.get(`/roles/${item._id}/resources`)
      item.allows = allows
    }
    return rows.map(processRoles)
  }

  async function exportAclConfig () {
    const permissions = await exportPermissions()
    const resources = await exportResources()
    const roles = await exportRoles()
    return { permissions, resources, roles }
  }

  return exportAclConfig
}
