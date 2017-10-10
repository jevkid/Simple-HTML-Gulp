var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch');

// Add additional JS dependancies here
var jsDependancies = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/moment/moment.js'
];

gulp.task('serve', function() {
    connect.server();
    gulp.src('./public')
        .pipe(webserver({
            port:'9090',
            open: true
        }));
});

gulp.task('watch', ['serve'], function() {
  gulp.watch('index.html');
// Add additional files to watch here
});