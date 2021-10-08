# easi.error

config 接口执行失败后执行该函数

sdk 成功返回值

```TypeScript
{
    errMsg:"error:fail,失败原因",
}
```

示例

```TypeScript
easi.error((err)=>{
    console.log(err)
})
```

## 参数

| 参数   | 描述     | 类型     | 值  | 是否必须 |
| ------ | -------- | -------- | --- | -------- |
| ()=>{} | 回调函数 | Function | -   | 否       |
