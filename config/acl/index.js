const permissions = require('./permissions')
const resources = require('./resources')
const roles = require('./roles')
module.exports = {
  defaultAcl: {
    permissions,
    resources,
    roles
  }
}
