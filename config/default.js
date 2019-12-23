module.exports = {
  modules: {
    conf: {
      config: require('./conf')
    },
    passport: {
      config: require('./passport')
    },
    acl: {
      config: {
        defaultAclConfig: require('./acl/config'),
        defaultAclConfigVer1: require('./acl/config_1')
      }
    },
    bank: {
      config: require('./bank')
    }
  }
}
