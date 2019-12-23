const _ = require('lodash')

function processResource (o, prefix = '') {
  let { code: id, title, permissions, noRecursion, children: v } = o
  id = id.replace(prefix, '')
  noRecursion || (noRecursion = undefined)
  const n = { id, title, permissions, noRecursion }
  if (v) {
    prefix = `${prefix}${id}`
    n.children = []
    v.forEach(function (o) {
      n.children.push(processResource(o, prefix))
    })
  }
  return n
}

function processRole (o, resources) {
  resources = JSON.parse(JSON.stringify(resources)) // 全新实例，避免影响源资源
  const nodes = {}
  // 扁平化
  function flatResources (v) {
    for (const item of v) {
      delete item.title
      delete item.noRecursion
      delete item.permissions
      nodes[item.code] = item
      if (item.children) flatResources(item.children)
    }
  }
  flatResources(resources)

  let { code: id, title, description, parents = [], allows } = o

  let v

  // 排除无权限资源
  function checkEmptyPermissionResources (v) {
    const removeList = []
    v.forEach((item, idx) => {
      const { permissions = [], children = [] } = item
      if (children) {
        const l = checkEmptyPermissionResources(children)
        if (l && l.length) {
          for (const i of _.reverse(l)) {
            children.splice(i, 1)
          }
        }

        if (!children.length) delete item.children
      }
      if (!permissions.length && !children.length) removeList.push(idx)
    })
    return removeList
  }

  if (allows) {
    for (const { resource, permissions } of allows) {
      if (nodes[resource]) nodes[resource].permissions = permissions
    }
    v = resources.map(item => processResource(item))

    const l = checkEmptyPermissionResources(v)
    if (l && l.length) {
      for (const i of _.reverse(l)) {
        v.splice(i, 1)
      }
    }

    if (!v.length) v = undefined
  }

  parents.length || (parents = undefined)
  return { id, title, description, parents, resources: v }
}

function convert01 (opts) {
  let { permissions, resources, roles } = opts

  return {
    version: 1,
    permissions: permissions.map(({ code: id, title }) => ({ id, title })),
    resources: resources.map(item => processResource(item)),
    roles: roles.map(item => processRole(item, resources))
  }
}

module.exports = {
  convert01
}
