var gulp = require('gulp'),
    less = require('gulp-less'),
    minify = require('gulp-minifier'),
    path = require('path');



gulp.task('min', function () {
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
})


gulp.task('default', function () {
    gulp.watch('source/*/*.*', ['min']);
});