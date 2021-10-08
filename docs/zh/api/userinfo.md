# easi.getUserInfo

获取用户信息

隐私信息接口，需要先获得用户授权。如果未登录则进入登录流程，不再显式调用之前的 login 方法

sdk 成功返回值

```TypeScript
{
    errMsg:"getUserInfo:ok",
    token:"",
    id:"",
    uid:"",
    email:"",
    nickName:"",
    headIcon:"",
    sex:""
}
```

示例

```TypeScript
easi.getUserInfo({
  success(res) {

  }
})
```

## 参数

| 参数     | 描述     | 类型     | 值  | 是否必须 |
| -------- | -------- | -------- | --- | -------- |
| success  | 成功回调 | Function | -   | 否       |
| fail     | 失败回调 | Function | -   | 否       |
| complete | 完成回调 | Function | -   | 否       |
