const gulp = require('gulp'),
      fileinclude = require('gulp-file-include');

module.exports = {
  compile: (env) => {
    return gulp.src([env.HTML_TEMPLATES])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest(env.EMAIL_DIST));
  }
};
