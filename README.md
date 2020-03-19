# easi_js_sdk

##使用方法
    var easi = new EASI();
    
    //获取app版本号
    easi.getVersion((result) => {
        if(result.code == 0){
            alert(result.data);
        }
    });
    //获取位置
    easi.getLocation((result) => {
        if(result.code == 0){
            alert(result.data);
        }
    });
    //调用扫码接口
    easi.scan((result) => {
        if(result.code == 0){
            //调用成功
        }
    });