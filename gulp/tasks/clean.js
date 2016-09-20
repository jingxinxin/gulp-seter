/**
 * Created by Jacks、 on 2016/5/19.
 */
// 'use strict';
var gulp = require('gulp'),
    // rename = require('gulp-rename'),
    // notify = require('gulp-notify'),
$ = require('gulp-load-plugins')();

var config = require('../config');

gulp.task('clean-css', function () {
  return gulp.src([config.css.source_dev, config.css.source_public, config.css.ignore_dev])
      .pipe($.clean())
      .pipe($.debug({title: '删除'}));
  // .pipe(notify({message: 'css have cleaned'}))
});
gulp.task('clean-js', function () {
  return gulp.src([config.js.source_dev, config.js.source_public, config.js.ignore_dev])
      .pipe($.clean())
      .pipe($.debug({title: '删除'}));

  // .pipe(notify({message: 'js have cleaned'}))
});
gulp.task('clean-images', function () {
  return gulp.src([config.images.source_dev, config.images.source_public, config.js.ignore_dev])
      .pipe($.clean())
      .pipe($.debug({title: '删除'}));

  // .pipe(notify({message: 'js have cleaned'}))
});

gulp.task('clean', function () {
  return gulp.src(
      [config.clean.es6_public,
        config.clean.es6_dev,
        config.css.ignore_dev,
        config.js.ignore_dev,
        config.css.source_dev + '/**/*.css',
        config.css.source_public + '/**/*.css',
        config.js.source_dev + '/**/*.js',
        config.js.source_public + '/**/*.js'
      ])
      .pipe($.clean())
      .pipe($.debug({title: '删除'}))
});