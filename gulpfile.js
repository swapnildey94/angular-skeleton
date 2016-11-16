/**
 * Created by Ramkumar on 10/21/2015.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['TaskOne'], function () {
    if (gutil.env.type === 'production') {
        return gutil.log('Default Gulp Task is Running ...');
    } else {
        return gutil.log('Default Gulp Task for Testing Environment is Running ...');
    }
});

gulp.task('TaskOne', [], function () {
    return gutil.log('Task One is Running ...');
});

gulp.task('copy-contents', [], function () {
    return gulp.src('src/*.html').
        pipe(gulp.dest('public'));
});

gulp.task('html-watcher', ['copy-contents'], function () {
    gulp.watch('src/*.html', ['TaskOne', 'copy-contents']);
});

gulp.task('jshint', [], function () {
    return gulp.
        src('src/js/**/*.js').
        pipe(jshint()).
        pipe(jshint.reporter('jshint-stylish'));
});

/* code quality */
gulp.task('cq', [], function () {
    return gulp.
    src('app/src/js/**/*.js').
    pipe(jshint()).
    pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', [], function () {
    return gulp.
        src('src/sass/**/*.scss').
        pipe(sourcemaps.init()).
        pipe(sass()).
        pipe(sourcemaps.write()).
        pipe(gulp.dest('public/css'));
});

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var Server = require('karma').Server;

gulp.task('js-test', [], function (done) {
    return new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('build-js', ['js-test'], function () {
    return gulp.
        src('src/js/**/*.js').
        pipe(jshint()).
        pipe(jshint.reporter('jshint-stylish')).
        pipe(sourcemaps.init()).
        pipe(concat('bundle.js')).
        pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()).
        pipe(sourcemaps.write()).
        pipe(gulp.dest('public/js'));
});