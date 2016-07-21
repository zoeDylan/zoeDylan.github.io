var gulp = require('gulp'),
    less = require('gulp-less'),
    minify = require('gulp-minifier'),
    path = require('path');

function _js() {
    gulp.src('source/js/*.js')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
            getKeptComment: function (content, filePath) {
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
            }
        }))
        .pipe(gulp.dest('statics/js'));

}
function _css(){
      gulp.src('source/less/*.less')
        .pipe(less())
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
            getKeptComment: function (content, filePath) {
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
            }
        }))
        .pipe(gulp.dest('statics/css'));


}

function _html(){
    gulp.src('source/html/*.html')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
            getKeptComment: function (content, filePath) {
                console.log(content)
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
            }
        }))
        .pipe(gulp.dest('./statics/html'));

    gulp.src('source/index.html')
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true,
            getKeptComment: function (content, filePath) {
                console.log(content)
                var m = content.match(/\/\*![\s\S]*?\*\//img);
                return m && m.join('\n') + '\n' || '';
            }
        }))
        .pipe(gulp.dest('./'));

}

function _iconfont(){
      gulp.src('source/iconfont/*') 
        .pipe(gulp.dest('./statics/css/iconfont'));
}
function _images(){
      gulp.src('source/images/*') 
        .pipe(gulp.dest('./statics/images'));
}
function _build(){
    _js();
    _css();
    _html();
    _iconfont();
    _images();
}
gulp.task('js',_js)

gulp.task('css',_css)

gulp.task('html',_html)

gulp.task('default', function () {
    gulp.watch('source/**/*.html', ['html']);
    gulp.watch('source/less/*.less', ['css']);
    gulp.watch('source/js/*.js', ['js']);
});

gulp.task('build', _build)