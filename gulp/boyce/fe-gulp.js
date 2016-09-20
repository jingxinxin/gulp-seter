// Load plugins
var gulp = require('gulp'),
  gulpLoadPlugins = require('gulp-load-plugins'),
  $ = gulpLoadPlugins();


// Less
gulp.task('xless', function () {
  return gulp.src('resources/assets/less/web/**/*.less')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.less().on('error', $.notify.onError(function (error) {
      console.log(error.message)
    })))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'IE 8-11']}))
    .pipe($.cssnano())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest('public/static/minifycss/web/'))
    .pipe($.size({title: 'Generate css', gzip: true}))
    .pipe($.logger({beforeEach: 'Generated -> '}))
    .pipe($.notify({title: 'Less', message: 'task less over', onLast: true}))
});

// Js
gulp.task('xjs', function () {
  return gulp.src('resources/assets/js/web/**/*.js')
    .pipe($.plumber())
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest('public/static/minifyjs/web/'))
    .pipe($.size({title: 'Generate js', gzip: true}))
    .pipe($.logger({beforeEach: 'Generated -> '}))
    .pipe($.notify({title: 'Js', message: 'task js over', onLast: true}))
});

// Img
gulp.task('ximg', function () {
  return gulp.src('resources/assets/img/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('public/static/img/'))
    .pipe($.logger({beforeEach: 'Compressed -> '}))
    .pipe($.size({title: 'Generate image', gzip: true}))
    .pipe($.notify({title: 'Img', message: 'task img over', onLast: true}))
});

// Nomin(Img without min)
gulp.task('nomin', function () {
  return gulp.src('resources/assets/img/**/*')
    .pipe(gulp.dest('public/static/img/'))
    .pipe($.logger({beforeEach: 'Move -> '}))
    .pipe($.size({title: 'Move image', gzip: true}))
    .pipe($.notify({title: 'Nomin', message: 'task nomin over', onLast: true}))
});

// Clean
gulp.task('xclean', function () {
  return gulp.src(['public/static/img', 'public/static/minifyjs', 'public/static/minifycss', 'public/static/files'], {read: false})
    .pipe($.clean())
    .pipe($.logger({beforeEach: 'Clean -> '}))
    .pipe($.notify({title: 'Clean', message: 'task clean over', onLast: true}))
});

// Lib
gulp.task('xlib', function () {
  return gulp.src('resources/assets/js/libs/**/*')
    .pipe($.logger({beforeEach: 'Move Lib -> '}))
    .pipe(gulp.dest('public/static/minifyjs/libs/'))
    .pipe($.notify({title: 'Move Lib', message: 'task move lib over', onLast: true}))
});

// Others
gulp.task('xothers', function () {
  return gulp.src('resources/assets/files/**/*')
    .pipe($.logger({beforeEach: 'Move Others -> '}))
    .pipe(gulp.dest('public/static/files/'))
    .pipe($.notify({title: 'Move Others', message: 'task move others over', onLast: true}))
});

// Copy
gulp.task('xcopy', ['xlib', 'xothers'], function () {
  return gulp.src(['public/static/files/', 'public/static/minifyjs/libs/'])
    .pipe($.size({title: 'copy', gzip: true}))
});

// Watch
gulp.task('xwatch', function () {
  // Watch .less files
  gulp.watch('resources/assets/less/**/*.less', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('xless');
  });

  // Watch .js files
  gulp.watch('resources/assets/js/**/*.js', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('xjs');
  });

  // Watch image files
  gulp.watch('resources/assets/img/**/*', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('nomin');
  });

  // Watch other files
  gulp.watch('resources/assets/files/**/*', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('xothers');
  });

  // Watch libs files
  gulp.watch('resources/assets/js/libs/**/*', function (event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    gulp.start('xlib');
  });
});

// Build
gulp.task('xbuild', ['xless', 'xjs', 'nomin'], function () {
  return gulp.src('public/static/**/*')
    .pipe($.size({title: 'build', gzip: true}))
});

// Default
gulp.task('beatit', ['xclean'], function () {
  gulp.start('xbuild', 'xcopy', 'xwatch')
});