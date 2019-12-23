module.exports = {
  permissions: [
    {
      code: 'post',
      title: '增'
    },
    {
      code: 'delete',
      title: '删'
    },
    {
      code: 'put',
      title: '改'
    },
    {
      code: 'get',
      title: '查'
    }
  ],
  resources: [
    {
      'code': 'global',
      'title': '全局权限',
      'permissions': [
        'put',
        'delete',
        'post',
        'get'
      ],
      'sort': 0,
      'children': [
        {
          'code': 'global/search',
          'title': '搜索',
          'permissions': [
            'get'
          ],
          'sort': 0
        }
      ]
    },
    {
      'code': '/acl',
      'title': '权限',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/acl/isAllowed',
          'title': '鉴权',
          'permissions': [
            'get'
          ],
          'sort': 0
        },
        {
          'code': '/acl/resources',
          'title': '资源',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/acl/resources/:code',
              'title': '指定资源',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': '/acl/roles',
          'title': '角色',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/acl/roles/:code',
              'title': '指定角色',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0,
              'children': [
                {
                  'code': '/acl/roles/:code/users',
                  'title': '指定角色的用户',
                  'permissions': [
                    'get'
                  ],
                  'sort': 0
                },
                {
                  'code': '/acl/roles/:code/resources',
                  'title': '指定角色的资源',
                  'permissions': [
                    'get',
                    'delete'
                  ],
                  'sort': 0
                },
                {
                  'code': '/acl/roles/:code/permissions',
                  'title': '指定角色的权限',
                  'permissions': [
                    'post',
                    'delete'
                  ],
                  'sort': 0
                }
              ]
            }
          ]
        },
        {
          'code': '/acl/users',
          'title': '系统用户',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/acl/users/:code',
              'title': '指定系统用户',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0,
              'children': [
                {
                  'code': '/acl/users/:code/roles',
                  'title': '指定用户的角色',
                  'permissions': [
                    'get'
                  ],
                  'sort': 0
                },
                {
                  'code': '/acl/users/:code/permissions',
                  'title': '指定用户的权限',
                  'permissions': [
                    'get'
                  ],
                  'sort': 0
                }
              ]
            }
          ]
        },
        {
          'code': '/acl/user',
          'title': '当前用户',
          'permissions': [
            'get'
          ],
          'sort': 0
        }
      ]
    },
    {
      'code': '/passport',
      'title': 'Passport',
      'permissions': [
        'get'
      ],
      'sort': 0,
      'children': [
        {
          'code': '/passport/register',
          'title': '注册',
          'permissions': [
            'post'
          ],
          'sort': 0
        },
        {
          'code': '/passport/login',
          'title': '登陆',
          'permissions': [
            'post'
          ],
          'sort': 0
        },
        {
          'code': '/passport/wechat',
          'title': '微信登录',
          'permissions': [
            'post'
          ],
          'sort': 0
        }
      ]
    },
    {
      'code': '/sso',
      'title': 'SSO',
      'permissions': [
        'get'
      ],
      'noRecursion': 0,
      'sort': 0
    },
    {
      'code': '/user',
      'title': '用户',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/user/users',
          'title': '用户列表',
          'permissions': [
            'post',
            'delete',
            'get',
            'put'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/user/users/:code',
              'title': '指定用户',
              'permissions': [
                'post',
                'delete',
                'get',
                'put'
              ],
              'sort': 0,
              'children': [
                {
                  'code': '/user/users/:code/password',
                  'title': '指定用户密码',
                  'permissions': [
                    'post',
                    'put'
                  ],
                  'sort': 0
                },
                {
                  'code': '/user/users/:code/exists',
                  'title': '指定用户是否存在',
                  'permissions': [
                    'get'
                  ],
                  'sort': 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      'code': '/bank',
      'title': 'Bank',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/bank/transfer',
          'title': '转账',
          'permissions': [
            'post'
          ],
          'sort': 0
        },
        {
          'code': '/bank/users',
          'title': '用户',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/bank/users/:code',
              'title': '指定用户',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': '/bank/accounts',
          'title': '账户',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/bank/accounts/:code',
              'title': '指定账户',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': '/bank/transfers',
          'title': '转帐记录',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/bank/transfers/:code',
              'title': '指定转帐记录',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': '/bank/balances',
          'title': '余额',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/bank/balances/:code',
              'title': '指定余额',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': '/bank/cts',
          'title': '货币',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/bank/cts/:code',
              'title': '指定货币',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0
            }
          ]
        }
      ]
    },
    {
      'code': '/shop',
      'title': 'Shop',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/shop/products',
          'title': '产品',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/shop/products/:code',
              'title': '指定产品',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': '/shop/orders',
          'title': '订单',
          'permissions': [
            'put',
            'delete',
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/shop/orders/:code',
              'title': '指定订单',
              'permissions': [
                'put',
                'delete',
                'post',
                'get'
              ],
              'sort': 0
            }
          ]
        }
      ]
    },
    {
      'code': '/cny',
      'title': 'CNY',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/cny/:code',
          'title': '指定余额',
          'permissions': [
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/cny/:code/transfer',
              'title': '转账',
              'permissions': [
                'post'
              ],
              'sort': 0
            },
            {
              'code': '/cny/:code/records',
              'title': '账单',
              'permissions': [
                'get'
              ],
              'sort': 0
            }
          ]
        }
      ]
    },
    {
      'code': '/tb',
      'title': 'TB',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/tb/:code',
          'title': '指定余额',
          'permissions': [
            'post',
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/tb/:code/transfer',
              'title': '转账',
              'permissions': [
                'post'
              ],
              'sort': 0
            },
            {
              'code': '/tb/:code/records',
              'title': '账单',
              'permissions': [
                'get'
              ],
              'sort': 0
            }
          ]
        }
      ]
    },
    {
      'code': '/wechat',
      'title': '微信公众号',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0
    },
    {
      'code': '/pay',
      'title': '支付',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/pay/prepay',
          'title': '预支付',
          'permissions': [
            'post'
          ],
          'sort': 0
        }
      ]
    },
    {
      'code': '/oms',
      'title': 'OMS',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/oms/nav',
          'title': '菜单',
          'permissions': [
            'get'
          ],
          'sort': 0
        },
        {
          'code': 'nav_acl_manage',
          'title': '权限管理',
          'permissions': [
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': 'nav_acl_user',
              'title': '用户管理',
              'permissions': [
                'get'
              ],
              'sort': 0
            },
            {
              'code': 'nav_acl_role',
              'title': '角色管理',
              'permissions': [
                'get'
              ],
              'sort': 0
            },
            {
              'code': 'nav_acl_resource',
              'title': '资源管理',
              'permissions': [
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': 'nav_config_manage',
          'title': '配置管理',
          'permissions': [
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': 'nav_config_unified',
              'title': '统一配置',
              'permissions': [
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': 'nav_system_manage',
          'title': '系统管理',
          'permissions': [
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': 'nav_system_log',
              'title': '系统日志',
              'permissions': [
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': 'nav_bank_manage',
          'title': '银行管理',
          'permissions': [
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': 'nav_bank_account',
              'title': '帐户列表',
              'permissions': [
                'get'
              ],
              'sort': 0
            },
            {
              'code': 'nav_bank_transfer',
              'title': '转账',
              'permissions': [
                'get'
              ],
              'sort': 0
            },
            {
              'code': 'nav_bank_deal',
              'title': '交易流水',
              'permissions': [
                'get'
              ],
              'sort': 0
            },
            {
              'code': 'nav_bank_currency',
              'title': '币种管理',
              'permissions': [
                'get'
              ],
              'sort': 0
            }
          ]
        },
        {
          'code': 'nav_agent_manage',
          'title': '代理管理',
          'permissions': [
            'get'
          ],
          'sort': 0,
          'children': [
            {
              'code': 'nav_acl_agent',
              'title': '代理列表',
              'permissions': [
                'get'
              ],
              'sort': 0
            }
          ]
        }
      ]
    },
    {
      'code': '/agent',
      'title': '代理',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/agent/agents',
          'title': '代理列表',
          'permissions': [
            'post',
            'get',
            'put'
          ],
          'sort': 0,
          'children': [
            {
              'code': '/agent/agents/:code',
              'title': '指定代理',
              'permissions': [
                'post',
                'delete',
                'get',
                'put'
              ],
              'sort': 0
            }
          ]
        }
      ]
    },
    {
      'code': '/log',
      'title': '日志',
      'permissions': [
        'get'
      ],
      'noRecursion': 1,
      'sort': 0,
      'children': [
        {
          'code': '/log/logs',
          'title': '日志列表',
          'permissions': [
            'post',
            'delete',
            'get',
            'put'
          ],
          'sort': 0
        }
      ]
    },
    {
      'code': '/verifycode',
      'title': '验证',
      'permissions': [
        'get'
      ],
      'sort': 0,
      'children': [
        {
          'code': '/verifycode/:key/check',
          'title': '验证验证码',
          'permissions': [
            'get'
          ],
          'sort': 0
        },
        {
          'code': '/verifycode/:key',
          'title': '获取验证码',
          'permissions': [
            'get'
          ],
          'sort': 0
        }
      ]
    }
  ],
  roles: [
    {
      code: 'root',
      title: '超级管理员',
      description: '超级管理员'
    },
    {
      code: 'guest',
      title: '访客',
      description: '访客',
      allows: [
        { resource: '/acl', permissions: ['get'] },
        { resource: '/acl/isAllowed', permissions: ['get'] },
        { resource: '/passport', permissions: ['get', 'post'] },
        { resource: '/sso', permissions: ['get'] },
        { resource: '/user', permissions: ['get'] },
        { resource: '/oms', permissions: ['get'] },
        { resource: '/bank', permissions: ['get'] },
        { resource: '/shop', permissions: ['get'] },
        { resource: '/tb', permissions: ['get'] },
        { resource: '/cny', permissions: ['get'] },
        { resource: '/agent', permissions: ['get'] },
        { resource: '/wechat', permissions: ['get'] },
        { resource: '/pay', permissions: ['get'] },
        { resource: '/pay/prepay', permissions: ['post'] }
      ]
    },
    {
      code: 'user',
      title: '用户',
      description: '已登陆用户',
      parents: ['guest'],
      allows: [
        { resource: '/user/users/:code', permissions: ['put', 'post', 'delete'] },
        { resource: '/acl/user', permissions: ['get'] },
        { resource: '/oms/nav', permissions: ['get'] }
      ]
    },
    {
      code: 'admin',
      title: '系统管理员',
      description: '系统管理员',
      parents: ['user']
    }
  ]
}
