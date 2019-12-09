module.exports = {
  'init': {
    'proxy': 'http://init'
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
  'acl': {
    'proxy': 'http://acl/acl'
  },
  'sso': {
    'proxy': 'http://sso/sso'
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
  'passport-wechat': {
    'prefix': '/passport/wechat',
    'proxy': 'http://passport-wechat/passport'
  },
  'weapp': {
    'proxy': 'http://weapp/weapp'
  },
  'passport-weapp': {
    'prefix': '/passport/weapp',
    'proxy': 'http://passport-weapp/passport'
  },
  'passport-mobile': {
    'prefix': '/passport/mobile',
    'proxy': 'http://passport-mobile/passport'
  },
  'passport-guest': {
    'prefix': '/passport/guest',
    'proxy': 'http://passport-guest/passport'
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
  'user': {
    'proxy': 'http://user/user'
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
