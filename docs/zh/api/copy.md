# easi.copy

复制文本内容

sdk 成功返回值

```TypeScript
{
    errMsg:"copy:ok",
}
```

示例

```TypeScript
easi.copy({
  content: 'hello world',
  success({ errMsg }) =>  {

  },
  fail({ errMsg }) => {

  },
})
```

## 参数

| 参数     | 描述     | 类型     | 值  | 是否必须 |
| -------- | -------- | -------- | --- | -------- |
| content  | 文本     | string   | -   | 是       |
| success  | 成功回调 | Function | -   | 否       |
| fail     | 失败回调 | Function | -   | 否       |
| complete | 完成回调 | Function | -   | 否       |
