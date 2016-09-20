// /**
//  * Created by Jacks、 on 2016/7/19.
//  */
//
// var gulp = require('gulp');
// var babel = require('gulp-babel');
// var es2015 = require('babel-preset-es2015');
// var webpack = require('gulp-webpack');
// var react = require('gulp-react');
//
// var config = require('../config');
//
// var resource_all = config.jsx.resource_all;
// var source_dev = config.jsx.source_dev;
//
// gulp.task("jsx", function () {
//   gulp.src(resource_all)
//       .pipe(react())//这里就是新加入的模块, 解析jsx用
//       .pipe(babel({presets: [es2015]}))//es6tojs的解析器
//       .pipe(gulp.dest(source_dev))
//       .pipe(webpack({//包装代码
//         output: {
//           filename: "[name].js"
//         },
//         stats: {
//           colors: true
//         }
//       }))
//       .pipe(gulp.dest(source_dev));
// });
//
// // /**
// //  * 编译单个改变的jsx文件
// //  **/
// // function compileJsxChanged(path_changed) {
// //   var firstIndex = path_changed.indexOf(path.sep);
// //   var lastIndex = path_changed.lastIndexOf(path.sep);
// //   var path_dest = path_changed.substr(firstIndex, lastIndex);
// //   return gulp.src([path.join(config.less.source, path_changed), config.less.ignore, config.less.ignore_components])         //less源文件
// //       .pipe(debug({title: '编译:'}))
// //       .pipe(react())    //执行编译
// //       .pipe(babel({presets: [es2015]}))
// //       .pipe(gulp.dest(path.join(config.jsx.source_dev, path_dest)))  //输出目录
// //       .pipe(webpack({//包装代码
// //         output: {
// //           filename: "[name].js"
// //         },
// //         stats: {
// //           colors: true
// //         }
// //       }))
// //       .pipe(gulp.dest(path.join(config.jsx.source_dev, path_dest)))  //输出目录
// //       .pipe(debug({title: '编译生成:'}))
// // }
// //
// // module.exports = {
// //   compileJsxChanged: compileJsxChanged
// // };
