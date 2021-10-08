# easi.getLocalImageData

获取本地图片 Base64 数据

sdk 成功返回值

```TypeScript
{
    errMsg:"getLocalImageData:ok",
    localData: ""
}
```

示例

```TypeScript
easi.getLocalImgData({
  localId: '',
  success({ localData }) {
    console.log(localData)
  },
})
```

## 参数

| 参数     | 描述           | 类型     | 值  | 是否必须 |
| -------- | -------------- | -------- | --- | -------- |
| localId  | 图片的 localId | string   | -   | 是       |
| success  | 成功回调       | Function | -   | 否       |
| fail     | 失败回调       | Function | -   | 否       |
| complete | 完成回调       | Function | -   | 否       |
