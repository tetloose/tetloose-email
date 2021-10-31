const gulp = require('gulp'),
      requireDir = require('require-dir'),
      tasks = requireDir('./'),
      plumber = require('gulp-plumber'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      filter = require('gulp-filter');

function scssError(e) {
  tasks.notification.default('❌ CSS Fail ❌', 'Check terminal', true);
  console.log(`❌ CSS Fail ❌\nError in file: ${e.relativePath} on Line: ${e.line} column: ${e.column} \n${e.formatted}`);
};

module.exports = {
  dev: (env) => {
    return gulp.src([env.SCSS_RESET, env.SCSS_INLINE, env.SCSS_MOBILE])
      .pipe(plumber({ errorHandler: scssError }))
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest(env.CSS_DEST))
      .pipe(filter(['**/*.css']));
  }
};
