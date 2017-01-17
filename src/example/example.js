/**
 * Created by jf on 2015/9/11.
 * Modified by bear on 2016/9/7.
 */
$(function () {
    var pageManager = {
        $container: $('#container'),
        _pageStack: [],
        _configs: [],
        _pageAppend: function(){},
        _defaultPage: null,
        _pageIndex: 1,
        setDefault: function (defaultPage) {
            this._defaultPage = this._find('name', defaultPage);
            return this;
        },
        setPageAppend: function (pageAppend) {
            this._pageAppend = pageAppend;
            return this;
        },
        init: function () {
            var self = this;

            $(window).on('hashchange', function () {
                var state = history.state || {};
                var url = location.hash.indexOf('#') === 0 ? location.hash : '#';
                var page = self._find('url', url) || self._defaultPage;
                if (state._pageIndex <= self._pageIndex || self._findInStack(url)) {
                    self._back(page);
                } else {
                    self._go(page);
                }
            });

            if (history.state && history.state._pageIndex) {
                this._pageIndex = history.state._pageIndex;
            }

            this._pageIndex--;

            var url = location.hash.indexOf('#') === 0 ? location.hash : '#';
            var page = self._find('url', url) || self._defaultPage;
            this._go(page);
            return this;
        },
        push: function (config) {
            this._configs.push(config);
            return this;
        },
        go: function (to) {
            var config = this._find('name', to);
            if (!config) {
                return;
            }
            location.hash = config.url;
        },
        _go: function (config) {
            this._pageIndex ++;

            var title = config.title;
            if(title!=null&&title!=''){
                document.title = title;
            }
            history.replaceState && history.replaceState({_pageIndex: this._pageIndex}, '', location.href);

            var html = $(config.template).html();
            var $html = $(html).addClass('slideIn').addClass(config.name);
            $html.on('animationend webkitAnimationEnd', function(){
                $html.removeClass('slideIn').addClass('js_show');
            });
            this.$container.html('');
            this.$container.append($html);
            this._pageAppend.call(this, $html);
            this._pageStack.push({
                config: config,
                dom: $html
            });

            if (!config.isBind) {
                this._bind(config);
            }

            return this;
        },
        back: function () {
            history.back();
        },
        _back: function (config) {
            this._pageIndex --;
            
            var title = config.title;
            if(title!=null&&title!=''){
                document.title = title;
            }
            var stack = this._pageStack.pop();
            if (!stack) {
                return;
            }

            // var url = location.hash.indexOf('#') === 0 ? location.hash : '#';
            // var found = this._findInStack(url);
            // if (!found) {
                var html = $(config.template).html();
                var $html = $(html).addClass('js_show').addClass(config.name);
                // $html.insertBefore(stack.dom);
                this.$container.html('');
                this.$container.append($html);

                if (!config.isBind) {
                    this._bind(config);
                }

                this._pageStack.push({
                    config: config,
                    dom: $html
                });
            // }

            stack.dom.addClass('slideOut').on('animationend webkitAnimationEnd', function () {
                stack.dom.remove();
            });

            return this;
        },
        _findInStack: function (url) {
            var found = null;
            for(var i = 0, len = this._pageStack.length; i < len; i++){
                var stack = this._pageStack[i];
                if (stack.config.url === url) {
                    found = stack;
                    break;
                }
            }
            return found;
        },
        _find: function (key, value) {
            var page = null;
            for (var i = 0, len = this._configs.length; i < len; i++) {
                if (this._configs[i][key] === value) {
                    page = this._configs[i];
                    break;
                }
            }
            return page;
        },
        _bind: function (page) {
            var events = page.events || {};
            for (var t in events) {
                for (var type in events[t]) {
                    this.$container.on(type, t, events[t][type]);
                }
            }
            page.isBind = true;
        }
    };

    var dataListOpt = {
        pageSize:10,
        offset:0,
        loading:false,
        data:undefined,
        xhrListKey:'list',
        url:undefined,
        pagePanel:undefined,
        itemsPanel:undefined,
        winPanel:undefined,
        winHeight:undefined,
        scrollPanel:undefined,
        scrollLoad:0.02,
        lazyTime:500,
        requestTime:0,
        init : function(){
            this.winHeight = this.winPanel.height();
            this.pagePanel.on('scroll',this.scrollHandler.bind(this));
        },
        first : function(data){
            this.setData(data);
            this.next();
        },
        next : function(){
            this.remote();
        },
        before:function(){},
        after:function(){},
        xhrAfter:function(){
            this.after();
            this.loading = false;
        },
        setData:function(data){
            this.getItemsPanel().html('');
            this.data = data;
            this.offset = 0;
        },
        makeParamData : function(){
            var data = this.data || {};
            data.max = this.pageSize;
            data.offset = this.offset;
            data.userid = $('#userid').val();
            return data;
        },
        checkLazy : function () {
            var requestTime = new Date().getTime();
            var ret = this.offset == 0 || (requestTime - this.requestTime) > this.lazyTime;
            if(ret){
                this.requestTime = requestTime;
            }
            return ret;
        },
        remote : function(){
            if(this.loading && this.checkLazy()){
                return;
            }
            this.loading = true;
            this.before();
            var oThis = this;
            var params = this.makeParamData();

            $.ajax({
                type: "POST",
                url: this.url,
                async: true,
                data: params,
                success: function (xhr) {
                    oThis.xhrProcess(params,xhr);
                    oThis.xhrAfter();
                },
                error: function (err) {
                    oThis.xhrAfter();
                }
            });
        },
        templateProcess : function (item) {
            return '<div>' + JSON.stringify(item)+'</div>'
        },
        getItemsPanel : function () {
            return this.itemsPanel
        },
        itemProcess : function (item) {
            this.getItemsPanel().append(this.templateProcess(item));
        },
        listProcess : function (list) {
            for(var i in list) {
                this.itemProcess(list[i])
            }
        },
        emptyCb : function () {},
        noMoreCb : function () {},
        xhrExternalProcess : function (params,xhr) {},
        xhrProcess : function (params,xhr) {
            var list = xhr[this.xhrListKey];
            if(list!=null && list.length != 0){
                this.offset += list.length;
                this.listProcess(list);
            }
            if(this.offset==0){
                this.emptyCb()
            }else{
                if(list && list.length<1){
                    this.noMoreCb()
                }
            }
            this.xhrExternalProcess(params,xhr);
        },
        scrollHandler : function(){
            var pageH = this.scrollPanel.height();
            var scrollT = this.pagePanel.scrollTop();
            var winH = this.winHeight;
            var aa = (pageH - winH - scrollT) / winH;
            if (aa < this.scrollLoad) {
                this.next();
            }
        }
    };

    var dataList = {
        newList : function(opt){
            var newDataList = $.extend({},dataListOpt,opt);
            newDataList.init();
            return newDataList;
        }
    };

    var startProxyTime;
    var lazyRateProxy = function (target,time) {
        startProxyTime = new Date().getTime();
        setTimeout(function () {
            var currTime = new Date().getTime();
            if(currTime - startProxyTime >= time){
                startProxyTime = null;
                target();
            }
        },time);
    };

    function fastClick(){
        var supportTouch = function(){
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }();
        var _old$On = $.fn.on;

        $.fn.on = function(){
            if(/click/.test(arguments[0]) && typeof arguments[1] == 'function' && supportTouch){ // 只扩展支持touch的当前元素的click事件
                var touchStartY, callback = arguments[1];
                _old$On.apply(this, ['touchstart', function(e){
                    touchStartY = e.changedTouches[0].clientY;
                }]);
                _old$On.apply(this, ['touchend', function(e){
                    if (touchStartY == null || Math.abs(e.changedTouches[0].clientY - touchStartY) > 10) return;
                    e.preventDefault();
                    callback.apply(this, [e]);
                }]);
            }else{
                _old$On.apply(this, arguments);
            }
            return this;
        };
    }
    function preload(){
        // $(window).on("load", function(){
        //     var imgList = [
        //         "./images/layers/content.png",
        //         "./images/layers/navigation.png",
        //         "./images/layers/popout.png",
        //         "./images/layers/transparent.gif"
        //     ];
        //     for (var i = 0, len = imgList.length; i < len; ++i) {
        //         new Image().src = imgList[i];
        //     }
        // });
    }
    function androidInputBugFix(){
        // .container 设置了 overflow 属性, 导致 Android 手机下输入框获取焦点时, 输入法挡住输入框的 bug
        // 相关 issue: https://github.com/weui/weui/issues/15
        // 解决方法:
        // 0. .container 去掉 overflow 属性, 但此 demo 下会引发别的问题
        // 1. 参考 http://stackoverflow.com/questions/23757345/android-does-not-correctly-scroll-on-input-focus-if-not-body-element
        //    Android 手机下, input 或 textarea 元素聚焦时, 主动滚一把
        if (/Android/gi.test(navigator.userAgent)) {
            window.addEventListener('resize', function () {
                if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
                    window.setTimeout(function () {
                        document.activeElement.scrollIntoViewIfNeeded();
                    }, 0);
                }
            })
        }
    }
    function setJSAPI(){
        var option = {
            title: 'WeUI, 为微信 Web 服务量身设计',
            desc: 'WeUI, 为微信 Web 服务量身设计',
            link: "https://weui.io",
            imgUrl: 'https://mmbiz.qpic.cn/mmemoticon/ajNVdqHZLLA16apETUPXh9Q5GLpSic7lGuiaic0jqMt4UY8P4KHSBpEWgM7uMlbxxnVR7596b3NPjUfwg7cFbfCtA/0'
        };

        $.getJSON('api/user/jsTicket.json?url=' + encodeURIComponent(location.href.split('#')[0])+'&userid='+$('#userid').val(), function (res) {
            wx.config({
                beta: true,
                debug: false,
                appId: res.appid,
                timestamp: res.timestamp,
                nonceStr: res.nonceStr,
                signature: res.signature,
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone',
                    // 'setNavigationBarColor',
                    'setBounceBackground',
                    'previewImage',
                    'chooseImage',
                    'uploadImage',
                    'downloadImage',
                    'closeWindow'
                ]
            });
            wx.ready(function () {
                /*
                 wx.invoke('setNavigationBarColor', {
                 color: '#F8F8F8'
                 });
                 */
                wx.invoke('setBounceBackground', {
                    'backgroundColor': '#F8F8F8',
                    'footerBounceColor' : '#F8F8F8'
                });
                wx.onMenuShareTimeline(option);
                wx.onMenuShareQQ(option);
                wx.onMenuShareAppMessage({
                    title: 'WeUI',
                    desc: '为微信 Web 服务量身设计',
                    link: location.href,
                    imgUrl: 'https://mmbiz.qpic.cn/mmemoticon/ajNVdqHZLLA16apETUPXh9Q5GLpSic7lGuiaic0jqMt4UY8P4KHSBpEWgM7uMlbxxnVR7596b3NPjUfwg7cFbfCtA/0'
                });
            });
        });
    }
    function setPageManager(){
        var pages = {}, tpls = $('script[type="text/html"]');
        var winH = $(window).height();

        for (var i = 0, len = tpls.length; i < len; ++i) {
            var tpl = tpls[i], name = tpl.id.replace(/tpl_/, '');
            pages[name] = {
                name: name,
                url: '#' + name,
                template: '#' + tpl.id,
                title:tpl.title
            };
        }
        pages.home.url = '#';

        for (var page in pages) {
            pageManager.push(pages[page]);
        }
        pageManager
            .setPageAppend(function($html){
                var $foot = $html.find('.page__ft');
                if($foot.length < 1) return;

                if($foot.position().top + $foot.height() < winH){
                    $foot.addClass('j_bottom');
                }else{
                    $foot.removeClass('j_bottom');
                }
            })
            .setDefault('home')
            .init();
    }

    function init(){
        preload();
        fastClick();
        androidInputBugFix();
        setJSAPI();
        window.dataList = dataList;
        window.lazyRateProxy = lazyRateProxy;

        setPageManager();

        window.pageManager = pageManager;
        window.home = function(){
            location.hash = '';
        };
    }
    init();
});

function getLocalTime(nS) {
    if(nS==null){
        return '';
    }
    var date = new Date(nS);
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hours = date.getHours();
    var min = date.getMinutes();
    var second = date.getSeconds();
    var tag = hours>12?'pm':'am';
    month = month<10?('0'+month):month;
    day = day<10?('0'+day):day;
    hours = hours<10?('0'+hours):hours;
    min = min<10?('0'+min):min;
    second = second<10?('0'+second):second;
    return date.getFullYear()+'-'+month+'-'+day + ' '+hours+':'+min+':'+second
};
//从0到总数动画效果
function animates(){
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
            }, options);
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeAttr('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
}