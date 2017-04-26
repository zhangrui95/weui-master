
var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var tap = require('gulp-tap');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var processhtml = require('gulp-processhtml');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var pkg = require('./package.json');
var yargs = require('yargs')
    .options({
        'w': {
            alias: 'watch',
            type: 'boolean'
        },
        's': {
            alias: 'server',
            type: 'boolean'
        },
        'p': {
            alias: 'port',
            type: 'number'
        },
        'g': {
            alias: 'gsp',
            type: 'boolean'
        }
    }).argv;

var option = {base: 'src'};
var dist = __dirname + '/dist';
var gspDist = dist + '/gsp';

gulp.task('build:style', function (){
    var banner = [
        '/*!',
        ' * WeUI v<%= pkg.version %> (<%= pkg.homepage %>)',
        ' * Copyright <%= new Date().getFullYear() %> Tencent, Inc.',
        ' * Licensed under the <%= pkg.license %> license',
        ' */',
        ''].join('\n');
    gulp.src('src/style/weui.less', option)
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function (e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({stream: true}))
        .pipe(nano({
            zindex: false,
            autoprefixer: false
        }))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(dist));
});

gulp.task('gsp:build:style', function (){
    var banner = [
        '/*!',
        ' * WeUI v<%= pkg.version %> (<%= pkg.homepage %>)',
        ' * Copyright <%= new Date().getFullYear() %> Tencent, Inc.',
        ' * Licensed under the <%= pkg.license %> license',
        ' */',
        ''].join('\n');
    var styleDist = gspDist+'/assets/stylesheets';
    gulp.src('src/style/weui.less', {base: 'src/style'})
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function (e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(styleDist))
        .pipe(nano({
            zindex: false,
            autoprefixer: false
        }))
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(styleDist));
});

gulp.task('build:gsp:assets', function (){
    var jsDist = gspDist+'/assets/javascripts';
    gulp.src('src/example/**/*.js', {base: 'src/example'})
        .pipe(gulp.dest(jsDist));
    var imgDist = gspDist+'/assets/images';
    gulp.src('src/example/images/**/*.?(png|jpg|gif)', {base: 'src/example/images'})
        .pipe(gulp.dest(imgDist));
});

gulp.task('build:example:assets', function (){
    gulp.src('src/example/**/*.?(png|jpg|gif)', option)
        .pipe(gulp.dest(dist));
    gulp.src('src/example/**/*.?(js)', option)
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build:gsp:style', function (){
    var styleDist = gspDist+'/assets/stylesheets';
    gulp.src('src/example/*.less', {base: 'src/example'})
        .pipe(less().on('error', function (e){
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(replace('images/',''))
        .pipe(postcss([autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
        .pipe(nano({
            zindex: false,
            autoprefixer: false
        }))
        .pipe(gulp.dest(styleDist));
});

gulp.task('build:example:style', function (){
    gulp.src('src/example/*.less', option)
        .pipe(less().on('error', function (e){
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
        .pipe(nano({
            zindex: false,
            autoprefixer: false
        }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build:example:html', function (){
    gulp.src('src/example/*.html', option)
        .pipe(tap(function (file){
            var dir = path.dirname(file.path);
            var contents = file.contents.toString();
            contents = contents.replace(/<link\s+rel="import"\s+href="(.*)"\s+title="(.*)">/gi, function (match, $1,$2){
                var filename = path.join(dir, $1);
                var id = path.basename(filename, '.html');
                var content = fs.readFileSync(filename, 'utf-8');
                return '<script type="text/html" id="tpl_'+ id +'" title="'+$2+'">\n'+ content +'\n</script>';
            });
            contents = contents.replace(/<link\s+rel="import"\s+href="(.*)">/gi, function (match, $1){
                var filename = path.join(dir, $1);
                var id = path.basename(filename, '.html');
                var content = fs.readFileSync(filename, 'utf-8');
                return '<script type="text/html" id="tpl_'+ id +'">\n'+ content +'\n</script>';
            });
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build:example:gsp', function (){
    var viewDist = gspDist+'/views';
    gulp.src(['src/example/*.html','!src/example/index.html'], {base: 'src/example'})
        .pipe(processhtml())
        .pipe(replace('../images','assets'))
        .pipe(replace('images/','assets/'))
        .pipe(tap(function (file){
            var dir = path.dirname(file.path);
            var subDir = path.basename(file.path, '.html');
            var contents = file.contents.toString();
            contents = contents.replace(/<link\s+rel="import"\s+href="(.*)"\s+title="(.*)">/gi, function (match, $1,$2){
                var filename = path.join(dir, $1);
                var id = path.basename(filename, '.html');
                gulp.src(filename)
                    .pipe(processhtml())
                    .pipe(replace('../images','assets'))
                    .pipe(replace('images/','assets/'))
                    .pipe(rename({basename:'_'+id,extname:'.gsp'}))
                    .pipe(gulp.dest(viewDist+'/'+subDir));
                var content = '<g:render template="'+subDir+'/'+id+'"/>';
                return '<script type="text/html" id="tpl_'+ id +'" title="'+$2+'">'+ content +'</script>';
            });
            contents = contents.replace(/<link\s+rel="import"\s+href="(.*)">/gi, function (match, $1){
                var filename = path.join(dir, $1);
                var id = path.basename(filename, '.html');
                gulp.src(filename)
                    .pipe(processhtml())
                    .pipe(replace('../images','assets'))
                    .pipe(replace('images/','assets/'))
                    .pipe(rename({basename:'_'+id,extname:'.gsp'}))
                    .pipe(gulp.dest(viewDist+'/'+subDir));
                var content = '<g:render template="'+subDir+'/'+id+'"/>';
                return '<script type="text/html" id="tpl_'+ id +'">'+ content +'</script>';
            });
            file.contents = new Buffer(contents);
        }))
        .pipe(rename({extname:'.gsp'}))
        .pipe(gulp.dest(viewDist));
});

gulp.task('build:example', ['build:example:assets', 'build:example:style', 'build:example:html']);

gulp.task('release', ['build:style', 'build:example']);

gulp.task('build:gsp', ['build:gsp:assets', 'build:gsp:style', 'build:example:gsp']);

gulp.task('gsp', ['gsp:build:style', 'build:gsp']);

gulp.task('watch', ['release'], function () {
    gulp.watch('src/style/**/*', ['build:style']);
    gulp.watch('src/example/example.less', ['build:example:style']);
    gulp.watch('src/example/swiper-3.3.1.min.less', ['build:example:style']);
    gulp.watch('src/example/**/*.?(png|jpg|gif|js)', ['build:example:assets']);
    gulp.watch('src/**/*.html', ['build:example:html']);
    gulp.watch("test/mock.js",['mock-watch']);
});

gulp.task('mock-watch', function (done) {
    browserSync.reset();
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        port: yargs.p,
        middleware: require('./test/mock'),
        open:false
    });
    done();
});

gulp.task('server', function () {
    yargs.p = yargs.p || 8080;
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        port: yargs.p,
        middleware: require('./test/mock'),
        startPath: '/example/dev.html'
    });
});

// 参数说明
//  -w: 实时监听
//  -s: 启动服务器
//  -p: 服务器启动端口，默认8080
gulp.task('default', ['release'], function () {
    if (yargs.s) {
        gulp.start('server');
    }

    if (yargs.w) {
        gulp.start('watch');
    }

    if (yargs.g) {
        gulp.start('gsp');
    }
});
