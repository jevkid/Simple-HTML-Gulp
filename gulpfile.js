var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    babel = require('gulp-babel');

gulp.task('serve', function() {
    connect.server();
    gulp.src('./public')
        .pipe(webserver({
            port:'9090',
            open: true
        }));
});

gulp.task('concatScripts', function() {
  return gulp.src('app.js')
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
  gulp.watch('index.html');
  gulp.watch('app.js', ['concatScripts']);
});

gulp.task('default', ['concatScripts', 'serve']);

gulp.task('dev', ['default', 'watch']);
