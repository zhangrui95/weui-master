wx.config = function (opt) {
    console.log('wx.config', opt)
};

wx.checkJsApi = function (opt) {
    console.log('wx.checkJsApi', opt);
    var checkResult = {};
    var jsApiList = opt.jsApiList;
    for(var i in jsApiList){
        checkResult[jsApiList[i]] = false;
    }
    opt.success({checkResult: checkResult});
};

wx.index = 0;

wx.getLocalImgData = function (opt) {
    console.log('wx.getLocalImgData', opt);
    wx.index++;
    opt.success({localData: 'testImgLocalData_' + wx.index});
};

wx.chooseImage = function (opt) {
    console.log('wx.chooseImage', opt);
    wx.index++;
    opt.success({localIds: ['testImgLocalUrl_' + wx.index]});
};

wx.uploadImage = function (opt) {
    console.log('wx.uploadImage', opt);
    wx.index++;
    opt.success({serverId: 'testServerImgId_' + wx.index});
};

wx.closeWindow = function () {
    console.log('wx.closeWindow');
};