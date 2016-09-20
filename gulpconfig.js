/**
 * Created by Jack·s on 2016/9/19.
 */
const d = '';


module.exports = {
  version: {
    tasks: {
      url: './gulp/tasks',
      devDependencies: {}
    },
    basic: './gulp/basic',
    boyce: {
      url: './gulp/boyce',
      devDependencies: {
        "gulp-autoprefixer": "^3.1.1",
        "gulp-cache": "^0.4.5",
        "gulp-clean": "^0.3.2",
        "gulp-cssnano": "^2.1.2",
        "gulp-debug": "^2.1.2",
        "gulp-eslint": "^3.0.1",
        "gulp-if": "^2.0.1",
        "gulp-imagemin": "^3.0.3",
        "gulp-less": "^3.1.0",
        "gulp-load-plugins": "^1.3.0",
        "gulp-logger": "0.0.2",
        "gulp-minify-css": "^1.2.4",
        "gulp-notify": "^2.2.0",
        "gulp-plumber": "^1.1.0",
        "gulp-rename": "^1.2.2",
        "gulp-sequence": "^0.4.6",
        "gulp-size": "^2.1.0",
        "gulp-sourcemaps": "^1.6.0",
        "gulp-uglify": "^2.0.0",
        "gulp-watch": "^4.3.9",
        "require-dir": "^0.3.0"
      }
    }
  },
  default: this.version
};