# easi_js_sdk

## 使用方法
    var easi = new Easi();
    
    //获取app版本号
    easi.getVersion((result) => {
        if(result.code == 0){
            //调用成功
            alert(result.data);
        }
    });
    //获取位置
    easi.getLocation((result) => {
        if(result.code == 0){
            //调用成功
            alert(result.data);
        }
    });
    //调用扫码接口
    easi.scan((result) => {
        if(result.code == 0){
            //调用成功
            alert(result.data);
        }
    });
    
    //微信分享接口
    easi.wx_share('跳转链接', '标题', '描述', 1);// mode=1代表分享微信好友
    easi.wx_share('跳转链接', '标题', '描述', 2);// mode=2代表分享微信朋友圈


`code为0代表调用成功`