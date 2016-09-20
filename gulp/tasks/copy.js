/**
 * Created by Jacks、 on 2016/6/23.
 */
/**
 * Created by Jacks、 on 2016/5/19.
 */
// 'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    config = require('../config'),
    debug = require('gulp-debug'),
    path = require('path');

gulp.task('copy-unzip', function () {
  var src = config.js.source + '/util/unzip';
  var dest = config.js.source_public + '/util/unzip';
  var resrc = config.js.source + '/util/unzip/**/*.js';
  console.log('复制:' + src);
  console.log('到:' + dest);
  return gulp.src(resrc)
      .pipe(debug({title: '复制'}))
      .pipe(gulp.dest(dest));
});


gulp.task('copy-images', function () {
  console.log('复制:' + config.images.source);
  console.log('到:' + config.images.source_dev);
  return gulp.src(config.images.resource_all)
      .pipe(debug({title: '复制'}))
      .pipe(gulp.dest(config.images.source_dev));
});


gulp.task('copy-js', function () {
  console.log('复制:' + config.js.source);
  console.log('到:' + config.js.source_dev);
  return gulp.src(config.js.resource_all)
      .pipe(debug({title: '复制'}))
      .pipe(gulp.dest(config.js.source_dev));
});

/**
 * copy单个改变的js文件
 **/
function copyJsChanged(path_changed) {
  var firstIndex = path_changed.indexOf(path.sep);
  var lastIndex = path_changed.lastIndexOf(path.sep);
  var path_dest = path_changed.substr(firstIndex, lastIndex);
  console.log('复制到:' + path.join(config.js.source_dev, path_dest));
  return gulp.src([path.join(config.js.source, path_changed), config.js.ignore])         //less源文件
      .pipe(debug({title: '复制:'}))
      .pipe(gulp.dest(path.join(config.js.source_dev, path_dest)));  //输出目录
}
/**
 * copy单个改变的img文件
 **/
function copyImgChanged(path_changed) {
  var firstIndex = path_changed.indexOf(path.sep);
  var lastIndex = path_changed.lastIndexOf(path.sep);
  var path_dest = path_changed.substr(firstIndex, lastIndex);
  console.log('复制到:' + path.join(config.js.source_dev, path_dest));
  return gulp.src([path.join(config.images.source, path_changed), config.images.ignore])         //less源文件
      .pipe(debug({title: '复制:'}))
      .pipe(gulp.dest(path.join(config.images.source_dev, path_dest)));  //输出目录
}

module.exports = {
  copyJsChanged: copyJsChanged,
  copyImgChanged: copyImgChanged
};