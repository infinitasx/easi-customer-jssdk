# easi.chooseImage

选取图片

sdk 成功返回值

```TypeScript
{
    errMsg:"chooseImage:ok",
    localIds: []
}
```

示例

```TypeScript
easi.chooseImage({
  accept: 'image/*',
  compressImage: true,
  capture: 'environment',
  count: 1,
  success({ localIds, errMsg }) =>  {
    console.log(localIds)
  },
  fail({ errMsg }) => {
    // chooseImage failed
  },
  cancel({ errMsg }) {
    // errMsg: 'chooseImage:canceled'
  },
})
```

## 参数

| 参数          | 描述             | 类型     | 值                  | 是否必须 |
| ------------- | ---------------- | -------- | ------------------- | -------- |
| accept        | 文件类型         | string   | image/\* / video/\* | 是       |
| compressImage | 是否压缩         | boolean  | true / false        | 是       |
| capture       | 前置或后置摄像头 | string   | environment / user  | 是       |
| count         | 数量             | number   | 1 ~ 9               | 是       |
| success       | 成功回调         | Function | -                   | 否       |
| fail          | 失败回调         | Function | -                   | 否       |
| complete      | 完成回调         | Function | -                   | 否       |
