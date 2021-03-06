module.exports = {
  lng: 'zh_CN',
  service_name: 'acl',
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
