module.exports = {
  'init': {
    'proxy': 'http://init'
  },
  'acl': {
    'proxy': 'http://acl/acl'
  },
  'sso': {
    'proxy': 'http://sso/sso'
  },
  'user': {
    'proxy': 'http://user/user'
  },
  'wechat-user': {
    'proxy': 'http://wechat-user/wechat-user'
  },
  'mq-kafka': {
    'proxy': 'http://mq-kafka/mq',
    'prefix': '/mq'
  },
  'pay-wechat-notify': {
    'httpProxy': 'http://pay-wechat',
    'prefix': '/pay/wechat/pay.notify'
  },
  'pay-wechat-refundnotify': {
    'httpProxy': 'http://pay-wechat',
    'prefix': '/pay/wechat/pay.refundnotify'
  },
  'pay-wechat': {
    'proxy': 'http://pay-wechat/pay/prepay/wechat',
    'prefix': '/pay/prepay/wechat'
  },
  'pay-alipay': {
    'proxy': 'http://pay-alipay/pay/prepay/alipay',
    'prefix': '/pay/prepay/alipay'
  },
  'gate': {
    'proxy': 'http://gate/gate'
  },
  'bank': {
    'proxy': 'http://bank/bank'
  },
  'qrcode': {
    'proxy': 'http://qrcode/qrcode'
  },
  'wechat': {
    'proxy': 'http://wechat/wechat'
  },
  'weapp': {
    'proxy': 'http://weapp/weapp'
  },
  'passport': {
    'proxy': 'http://passport/passport'
  },
  'sms': {
    'proxy': 'http://sms/sms'
  },
  'captcha': {
    'proxy': 'http://captcha/captcha'
  },
  'verifycode': {
    'proxy': 'http://verifycode/verifycode'
  },
  'tb': {
    'proxy': 'http://tb'
  },
  'cny': {
    'proxy': 'http://cny'
  },
  'pay': {
    'proxy': 'http://pay/pay'
  },
  'log': {
    'proxy': 'http://log/log'
  },
  'wordfilter': {
    'proxy': 'http://wordfilter/wordfilter'
  },
  'agent': {
    'proxy': 'http://agent/agent'
  }
}
