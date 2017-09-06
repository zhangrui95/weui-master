wx.config = function (opt) {
    console.log('wx.config', opt)
};

wx.checkJsApi = function (opt) {
    console.log('wx.checkJsApi', opt);
    var checkResult = {};
    var jsApiList = opt.jsApiList;
    for(var i in jsApiList){
        checkResult[jsApiList[i]] = true;
    }
    opt.success({checkResult: checkResult});
};

wx.index = 0;
wx.__hideFileMap = {};

wx.getLocalImgData = function (opt) {
    console.log('wx.getLocalImgData', opt);
    var file = wx.__hideFileMap[opt.localId];
    console.log('wx.getLocalImgData file', file);
    if(file){
        var render = new FileReader();
        render.onload = function (e) {
            opt.success({localData: e.target.result});
        };
        render.readAsDataURL(file);
    }else{
        setTimeout(function(){
            opt.success({localData: opt.localId});
        },500+Math.round(Math.random()*100));
    }
};

wx.chooseImage = function (opt) {
    console.log('wx.chooseImage', opt);
    var input = document.createElement('input');
    input.type = 'file';
    // input.accept = 'image/*';
    if(opt.count > 1){
        input.multiple = 'multiple';
    }
    var hideFileMap = {};
    wx.__hideFileMap = hideFileMap;
    input.onchange = function () {
        console.log('wx.chooseImage file', input.files);
        var files = input.files;
        if(files && files.length !== 0){
            var localIds = [],len = files.length;
            for(var i =0;i<len;i++){
                (function (file) {
                    var render = new FileReader();
                    render.onload = function (e) {
                        var blob = new Blob([e.target.result]);
                        var src = (URL|| webkitURL).createObjectURL(blob);
                        localIds.push(src);
                        hideFileMap[src] = file;
                        if(localIds.length === len){
                            console.log('wx.chooseImage localIds', localIds);
                            opt.success({localIds: localIds});
                        }
                    };
                    render.readAsArrayBuffer(file);
                })(files[i]);
            }
        }
    };
    input.click();
};

wx.uploadImage = function (opt) {
    console.log('wx.uploadImage', opt);
    setTimeout(function(){
        wx.index++;
        opt.success({serverId: 'testServerImgId_' + wx.index});
    },500+Math.round(Math.random()*100));
};

wx.closeWindow = function () {
    console.log('wx.closeWindow');
};

wx.ready = function (cb) {
    console.log('wx.ready');
    cb();
};

wx.invoke = function (func,opt) {
    console.log('wx.invoke '+func,opt);
};

wx.onMenuShareTimeline = function (opt) {
    console.log('wx.onMenuShareTimeline',opt);
};

wx.onMenuShareQQ = function (opt) {
    console.log('wx.onMenuShareTimeline',opt);
};

wx.onMenuShareAppMessage = function (opt) {
    console.log('wx.onMenuShareAppMessage',opt);
};

wx.onMenuShareWeibo = function (opt) {
    console.log('wx.onMenuShareTimeline',opt);
};

wx.onMenuShareQZone = function (opt) {
    console.log('wx.onMenuShareQZone',opt);
};

wx.hideAllNonBaseMenuItem = function (opt) {
    console.log('wx.hideAllNonBaseMenuItem',opt);
};