# easi-customer-jssdk

## 使用方法

#### es6

```javascript
import { Easi } from "easi-customer-jssdk";
let easi = new Easi();
```

#### CommonJS

```javascript
const { Easi } = require("easi-customer-jssdk/dist/es");
let easi = new Easi();
```

#### Browser

```javascript
let easi = new Easi.Easi();

// 判断是否 EASI 客户端
const isEASI = easi.isEasi();

// 获取 app 版本号
easi.getVersion((result) => {
  if (result.code === 0) {
    // 调用成功
    console.log(result.data);
  }
});

// 获取位置
easi.getLocation((result) => {
  if (result.code === 0) {
    // 调用成功
    console.log(result.data);
  }
});

// 用扫码接口
easi.scan((result) => {
  if (result.code === 0) {
    // 调用成功
    console.log(result.data);
  }
});

// 获取用户信息
easi.user((result) => {
  if (result.code === 0) {
    // 调用成功
    console.log(result.data);
  }
});

// 微信分享接口
easi.wx_share("跳转链接", "标题", "描述", 1); // mode=1 代表分享微信好友
easi.wx_share("跳转链接", "标题", "描述", 2); // mode=2 代表分享微信朋友圈
```

code 为 0 代表调用成功
