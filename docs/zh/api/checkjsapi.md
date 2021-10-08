# easi.checkJsApi

检查是否支持指定 API

sdk 成功返回值

```TypeScript
{
    errMsg:"checkJsApi:ok",
    checkResult：{chooseImage: true, copy: false},
}
```

示例

```TypeScript
easi.checkJsApi({
  jsApiList: ['chooseImage', 'copy'],
  success({ checkResult, errMsg }) =>  {
  },
  fail({ errMsg }) => {

  },
})
```

## 参数

| 参数      | 描述                 | 类型     | 值                       | 是否必须 |
| --------- | -------------------- | -------- | ------------------------ | -------- |
| jsApiList | 检查是否支持指定 API | string[] | ['chooseImage',...other] | 是       |
| success   | 成功回调             | Function | -                        | 否       |
| fail      | 失败回调             | Function | -                        | 否       |
| complete  | 完成回调             | Function | -                        | 否       |
