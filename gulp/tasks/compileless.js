/**
 * Created by Jacks、 on 2016/5/17.
 */
// 'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    debug = require('gulp-debug'),
    path = require('path');

var config = require('../config');

gulp.task('compile-less', function () {
  return gulp.src([config.less.resource_all, config.less.ignore, config.less.ignore_components])         //less源文件
      .pipe(debug({title: '编译:'}))
      .pipe(less(config.less.settings))    //执行编译
      .pipe(gulp.dest(config.css.source_dev))   //输出目录
      .pipe(debug({title: '生成:'}));
  // .pipe(notify({message: 'compileless have been done'}))
});

/**
 * 编译单个改变的less文件
 **/
function compileLessChanged(path_changed) {
  var firstIndex = path_changed.indexOf(path.sep);
  var lastIndex = path_changed.lastIndexOf(path.sep);
  var path_dest = path_changed.substr(firstIndex, lastIndex);
  return gulp.src([path.join(config.less.source, path_changed), config.less.ignore, config.less.ignore_components])         //less源文件
      .pipe(debug({title: '编译:'}))
      .pipe(less(config.less.settings))    //执行编译
      .pipe(gulp.dest(path.join(config.css.source_dev, path_dest)))  //输出目录
      .pipe(debug({title: '编译生成:'}))
}

module.exports = {
  compileLessChanged: compileLessChanged
};