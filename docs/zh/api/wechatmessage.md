# easi.updateWechatMessageShareData

分享到微信联系人

sdk 成功返回值

```TypeScript
{
    errMsg:"updateWechatMessageShareData:ok",
}
```

示例

```TypeScript
easi.updateWechatMessageShareData({
    title: '',
    desc: '',
    link: '',
    imgUrl: '',
    success() => {
      console.log("设置成功")
    },
})
```

## 参数

| 参数     | 描述     | 类型     | 值  | 是否必须 |
| -------- | -------- | -------- | --- | -------- |
| title    | 分享标题 | string   | -   | 是       |
| desc     | 分享描述 | string   | -   | 否       |
| link     | 跳转链接 | string   | -   | 是       |
| imgUrl   | 封面图   | string   | -   | 是       |
| success  | 成功回调 | Function | -   | 否       |
| fail     | 失败回调 | Function | -   | 否       |
| complete | 完成回调 | Function | -   | 否       |
