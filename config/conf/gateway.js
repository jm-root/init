module.exports = {
  'init': {
    'proxy': 'http://init.app.rancher.internal'
  },
  'mq-kafka': {
    'proxy': 'http://mq-kafka.app.rancher.internal/mq',
    'prefix': '/mq'
  },
  'pay-wechat-notify': {
    'httpProxy': 'http://pay-wechat.app.rancher.internal',
    'prefix': '/pay/wechat/pay.notify'
  },
  'pay-wechat-refundnotify': {
    'httpProxy': 'http://pay-wechat.app.rancher.internal',
    'prefix': '/pay/wechat/pay.refundnotify'
  },
  'pay-wechat': {
    'proxy': 'http://pay-wechat.app.rancher.internal/pay/prepay/wechat',
    'prefix': '/pay/prepay/wechat'
  },
  'pay-alipay': {
    'proxy': 'http://pay-alipay.app.rancher.internal/pay/prepay/alipay',
    'prefix': '/pay/prepay/alipay'
  },
  'gate': {
    'proxy': 'http://gate.app.rancher.internal/gate'
  },
  'acl': {
    'proxy': 'http://acl.app.rancher.internal/acl'
  },
  'sso': {
    'proxy': 'http://sso.app.rancher.internal/sso'
  },
  'bank': {
    'proxy': 'http://bank.app.rancher.internal/bank'
  },
  'qrcode': {
    'proxy': 'http://qrcode.app.rancher.internal/qrcode'
  },
  'wechat': {
    'proxy': 'http://wechat.app.rancher.internal/wechat'
  },
  'passport-wechat': {
    'prefix': '/passport/wechat',
    'proxy': 'http://passport-wechat.app.rancher.internal/passport'
  },
  'weapp': {
    'proxy': 'http://weapp.app.rancher.internal/weapp'
  },
  'passport-weapp': {
    'prefix': '/passport/weapp',
    'proxy': 'http://passport-weapp.app.rancher.internal/passport'
  },
  'passport-mobile': {
    'prefix': '/passport/mobile',
    'proxy': 'http://passport-mobile.app.rancher.internal/passport'
  },
  'passport-guest': {
    'prefix': '/passport/guest',
    'proxy': 'http://passport-guest.app.rancher.internal/passport'
  },
  'passport': {
    'proxy': 'http://passport.app.rancher.internal/passport'
  },
  'sms': {
    'proxy': 'http://sms.app.rancher.internal/sms'
  },
  'captcha': {
    'proxy': 'http://captcha.app.rancher.internal/captcha'
  },
  'verifycode': {
    'proxy': 'http://verifycode.app.rancher.internal/verifycode'
  },
  'user': {
    'proxy': 'http://user.app.rancher.internal/user'
  },
  'tb': {
    'proxy': 'http://tb.app.rancher.internal'
  },
  'cny': {
    'proxy': 'http://cny.app.rancher.internal'
  },
  'pay': {
    'proxy': 'http://pay.app.rancher.internal/pay'
  },
  'log': {
    'proxy': 'http://log.app.rancher.internal/log'
  },
  'wordfilter': {
    'proxy': 'http://wordfilter.app.rancher.internal/wordfilter'
  },
  'agent': {
    'proxy': 'http://agent.app.rancher.internal/agent'
  }
}
