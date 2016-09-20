/**
 * Created by Jacks、 on 2016/5/17.
 */
// 'use strict';

var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    debug = require('gulp-debug'),
    path = require('path');

var config = require('../config');

gulp.task('minify-css', function () {
  console.log('压缩到:' + config.css.source_public);
  return gulp.src([config.css.resource_dev, config.css.ignore_dev])
      .pipe(debug({title: '压缩:'}))
      .pipe(minifycss())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(config.css.source_public))
});


/**
 * 压缩单个改变的css文件
 **/
function minifyCssChanged(path_changed) {
  var firstIndex = path_changed.indexOf(path.sep);
  var lastIndex = path_changed.lastIndexOf(path.sep);
  var path_dest = path_changed.substr(firstIndex, lastIndex);
  console.log('压缩到:' + path.join(config.css.source_public, path_dest));
  return gulp.src([path.join(config.css.source_dev, path_changed), config.css.ignore_dev])       
      .pipe(debug({title: '压缩:'}))
      .pipe(minifycss())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(path.join(config.css.source_public, path_dest)))  //输出目录
      .pipe(debug({title: '压缩生成:'}))
}

module.exports = {
  minifyCssChanged: minifyCssChanged
};