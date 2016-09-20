/**
 * Created by Jacks、 on 2016/5/17.
 */
// 'use strict';
var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('less', function (cb) {
  // gulpSequence('clean-css', 'compile-less', 'minify-css', 'watch-less', cb);
  gulpSequence(['compile-less'], 'minify-css', cb);
});
gulp.task('js', function (cb) {
  gulpSequence(['copy-js'], 'minify-js', cb);
});
gulp.task('images', function (cb) {
  gulpSequence(['copy-images'], cb);
});


gulp.task('less-w', function (cb) {
  // gulpSequence('clean-css', 'compile-less', 'minify-css', 'watch-less', cb);
  gulpSequence(['compile-less'], 'minify-css','watch-less', cb);
});
gulp.task('js-w', function (cb) {
  gulpSequence(['copy-js'], 'minify-js', 'watch-js', cb);
});
gulp.task('images-w', function (cb) {
  gulpSequence(['copy-images'],'watch-images', cb);
});

// gulp.task('images', function (cb) {
//   gulpSequence('copy-images',  'watch-images', cb);
// });

gulp.task('minify-all',function (cb) {
  gulpSequence(['clean-css','clean-js'],['minify-css','minify-js'],cb);
});

gulp.task('fuck',function (cb) {
  gulpSequence('js','less','images','copy-unzip',cb);
});

gulp.task('fuck-w',function (cb) {
  gulpSequence('js-w','less-w','images-w','copy-unzip',cb);
});

