module.exports = function (acl) {
  async function exportAclConfig () {
    const { rows: permissions } = await acl.get('/permissions')
    const { rows: resources } = await acl.get('/resources')
    const { rows: roles } = await acl.get('/roles')
    return { version: 1, permissions, resources, roles }
  }

  return exportAclConfig
}
