# easi.selectAppAddress

选择地址

sdk 成功返回值

```TypeScript
{
    errMsg:"selectAppAddress:ok",
    data:{
      addressId: "123455"
    }
}
```

示例

```TypeScript
easi.selectAppAddress({
  success(res) =>  {
  },
})
```

## 参数

| 参数     | 描述     | 类型     | 值  | 是否必须 |
| -------- | -------- | -------- | --- | -------- |
| success  | 成功回调 | Function | -   | 否       |
| fail     | 失败回调 | Function | -   | 否       |
| complete | 完成回调 | Function | -   | 否       |
