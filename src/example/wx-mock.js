wx.config = function (opt) {
    console.log('wx.config', opt)
};

wx.index = 0;

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