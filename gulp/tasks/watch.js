/**
 * Created by Jacks、 on 2016/5/17.
 */
// 'use strict';
//外部
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify'),
    gulpSequence = require('gulp-sequence');
//内部
var _compileLess = require('./compileless');
// import _compileJsx from './compilejsx';
var _copy = require('./copy');
var _minifycss = require('./minifycss');
var _minifyjs = require('./minifyjs');
var config = require('../config');


gulp.task('watch-less', function () {
  console.log('监听:' + config.less.resource_all);
  gulp.watch(config.less.resource_all, function (event) {    //监听所有less
    console.log('修改了:' + event.path);
    var path_changed = event.path.substr(event.path.indexOf('less') + 4);
    _compileLess.compileLessChanged(path_changed);
    setTimeout(function () {
      path_changed = path_changed.substr(0, path_changed.indexOf('.')) + '.css';
      _minifycss.minifyCssChanged(path_changed);
    }, 200);
  })
});

gulp.task('watch-js', function () {
  console.log('监听:' + config.js.resource_all);
  gulp.watch(config.js.resource_all, function (event) {
    console.log('修改了:' + event.path);
    var path_changed = event.path.substr(event.path.indexOf('js') + 2);
    _copy.copyJsChanged(path_changed);
    setTimeout(function () {
      _minifyjs.minifyJsChanged(path_changed);
    }, 200);
  })
});

gulp.task('watch-jsx', function () {
  console.log('监听:' + config.jsx.resource_all);
  gulp.watch(config.jsx.resource_all, function (event) {
    console.log('修改了:' + event.path);
    gulp.run('jsx');
    // var path_changed = event.path.substr(event.path.indexOf('jsx') + 3);
    // _compileJsx.compileJsxChanged(path_changed);
  })
});

gulp.task('watch-images', function () {
  console.log('监听:' + config.images.source);
  gulp.watch(config.images.resource_all, function (event) {
    console.log('修改了:' + event.path);
    var extension = event.path.split('.').pop().toLowerCase();
    var path_changed = event.path.substr(event.path.indexOf(extension) + 3);
    _copy.copyImgChanged(path_changed);
  })
});

gulp.task('watch-all', function (cb) {
  gulpSequence('watch-less', 'watch-js', 'watch-images', cb);
});

