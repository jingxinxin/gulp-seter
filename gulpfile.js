var requireDir = require('require-dir');
var gulpconfig = require('./gulpconfig');



// 选择你想要的gulp组合
requireDir(gulpconfig.default, {recurse: true});  //获取环境变量

