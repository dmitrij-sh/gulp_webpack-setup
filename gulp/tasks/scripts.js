const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const mode = require('gulp-mode')();
const paths = require('../paths');
const webpackConfigDev = require('../dev');
const webpackConfigProd = require('../prod');

const scripts = () => {
  return gulp
    .src(paths.src.js)
    .pipe(mode.production(webpackStream(webpackConfigProd, webpack)))
    .pipe(mode.development(webpackStream(webpackConfigDev, webpack)))
    .pipe(gulp.dest(paths.build.js));
};

// const scripts = () => {
//   return gulp
//     .src(paths.src.js)
//     .pipe(plumber())
//     .pipe(babel())
//     .pipe(concat('scripts.js'))
//     .pipe(mode.production(uglify()))
//     .pipe(gulp.dest(paths.build.js));
// };

module.exports = scripts;
