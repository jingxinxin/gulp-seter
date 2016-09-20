// 'use strict';
/**
 * less
 * */
const src_less = './resources/assets/less';
/**
 * css
 * */
const scr_css_dev = './public/static/css';
const src_css_public = './public/static/minifycss';
/**
 * js
 * */
const src_js = './resources/assets/js';
const src_js_dev = './public/static/js';
const src_js_public = './public/static/minifyjs';
/**
 * jsx
 * */
const src_jsx = './resources/assets/js/components';
const src_jsx_dev = './public/static/js/components';
const src_jsx_public = './public/static/minifyjs/components';
/**
 * images
 * */
const src_images = './resources/assets/img';
const src_images_dev = './public/static/img';
const src_images_public = './public/static/minifyimg';

module.exports = {
  images: {
    source: src_images,
    source_dev: src_images_dev,
    source_public: src_images_public,
    resource_all: src_images + '/**/*.+(jpg|png|gif|svg)',
    resource_dev: src_images_dev + '/**/*.+(jpg|png|gif|svg)',
    ignore: '!',
    ignore_dev: '!',
    ignore_public: "!"
  },
  css: {
    source_dev: scr_css_dev,
    source_public: src_css_public,
    resource_dev: scr_css_dev + '/**/*.css', // all css
    ignore: '!',
    ignore_dev: '!' + scr_css_dev + '/admin/**/*.css',
    ignore_public: "!"
  },
  js: {
    source: src_js, //源地址
    source_dev: src_js_dev,
    source_public: src_js_public,
    resource_all: src_js + '/**/*.js', //all js
    resource_dev: src_js_dev + '/**/*.js', //all js
    ignore: '!' + src_js_dev + '/util/unzip/**/*.js',
    ignore_dev: '!' + src_js_dev + '/+(admin)/**/*.js',
    ignore_public: "!",
    ignore_es6_js: '!' + src_js_dev + '/**/*-compiled.+(js|js.map)'
  },
  jsx:{
    source: src_jsx, //源地址
    source_dev: src_jsx_dev,
    source_public: src_jsx_public,
    resource_all: src_jsx + '/**/*.jsx', //all js
    resource_dev: src_jsx_dev + '/**/*.jsx', //all js
    ignore: '!' + src_jsx_dev + '/util/unzip/**/*.jsx',
    ignore_dev: '!' + src_jsx_dev + '/+(admin)/**/*.jsx',
    ignore_public: "!"
  },
  less: {
    source: src_less,   //源地址
    resource_all: src_less + '/**/*.less',   //所有less
    resource_single: src_less + '/*.less',	      //需要编译的less
    ignore: '!' + src_less + '/commonConfig.less',
    ignore_components: '!' + src_less + '/+(components|module)/**/*.less',
    settings: {		      //编译less过程需要的配置，可以为空
    }
  },
  clean: {
    es6_public: src_js_public + '/**/*-compiled.+(js|js.map)',
    es6_dev: src_js_dev + '/**/*-compiled.+(js|js.map)'
  },
  variables: {
    g: ""
  }
};