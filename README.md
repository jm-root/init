# init

初始化服务，方便对于基于 jamma 的微服务进行初始化

## 配置参数

基本配置 请参考 [jm-server] (https://github.com/jm-root/ms/tree/master/packages/jm-server)

gateway Gateway服务器Uri

###接口

- get /conf/init

    初始化gateway

- get /acl/init

    初始化权限系统

- get /passport/init

    初始化用户系统

- get /bank/init

    初始化银行货币

