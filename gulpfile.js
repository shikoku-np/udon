'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var svgstore = require('gulp-svgstore');

gulp.task('workflow', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano({
      autoprefixer: {browsers: 'last 2 versions', add: true}
    }))
    .pipe(concat('udon.min.css'))
    .pipe(gulp.dest('./dst/css/'))

  gulp.src('./src/sg/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano({
      autoprefixer: {browsers: 'last 2 versions', add: true}
    }))
    .pipe(concat('sg.css'))
    .pipe(gulp.dest('./dst/sg/'))
});
gulp.task('js.concat', function() {
  gulp.src('./src/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('udon.js'))
    .pipe(gulp.dest('./dst/js'));
});
gulp.task('svgstore', function () {
    return gulp
        .src('./src/img/icons/*.svg')
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('dst/img'));
});

gulp.task('default', function () {
	gulp.watch(['src/sass/**/*.scss','./src/sg/*.scss'], ['workflow']);
	gulp.watch('src/js/**/*.js', ['js.concat']);
      gulp.watch('src/img/icons/**/*.svg', ['svgstore']);
});
