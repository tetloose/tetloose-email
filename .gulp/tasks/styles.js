const gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      sass = require('gulp-dart-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      filter = require('gulp-filter');

function scssError(e) {
  console.log(`❌ CSS Fail ❌\nError in file: ${e.relativePath} on Line: ${e.line} column: ${e.column} \n${e.formatted}`);
};

module.exports = {
  dev: (env) => {
    return gulp.src([env.SCSS_RESET, env.SCSS_INLINE, env.SCSS_MOBILE])
      .pipe(plumber({ errorHandler: scssError }))
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest(env.CSS_DEST))
      .pipe(filter(['**/*.css']));
  }
};
