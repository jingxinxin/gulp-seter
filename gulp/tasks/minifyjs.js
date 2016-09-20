/**
 * Created by Jacks、 on 2016/5/19.
 */
// 'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    debug = require('gulp-debug'),
    path = require('path');

var config = require('../config');

gulp.task('minify-js', function () {
  console.log('压缩到:' + config.js.source_public);
  return gulp.src([config.js.resource_dev,
    config.js.ignore_dev,
    config.js.ignore_es6_js,
    config.js.ignore])
      .pipe(debug({title: '压缩'}))
      // .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(config.js.source_public));
  // .pipe(notify({message: 'minifyjs had been done'}))
});


/**
 * 压缩单个改变的js文件
 **/
function minifyJsChanged(path_changed) {
  var firstIndex = path_changed.indexOf(path.sep);
  var lastIndex = path_changed.lastIndexOf(path.sep);
  var path_dest = path_changed.substr(firstIndex, lastIndex);
  console.log('压缩到:' + path.join(config.js.source_public, path_dest));
  return gulp.src([path.join(config.js.source_dev, path_changed),
    config.js.ignore_dev,config.js.ignore])
      .pipe(debug({title: '压缩:'}))
      // .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(path.join(config.js.source_public, path_dest)));  //输出目录
}

module.exports = {
  minifyJsChanged: minifyJsChanged
};