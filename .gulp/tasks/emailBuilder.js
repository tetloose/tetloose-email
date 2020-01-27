const gulp = require('gulp'),
      emailBuilder = require('gulp-email-builder-min'),
      options = { encodeSpecialChars: true },
      builder = emailBuilder(options);

let emailBuilderLoaded = false;

module.exports = {
  dev: (env) => {
    if (emailBuilderLoaded) {
      setTimeout(() => {
        return gulp.src([env.HTML_FILES])
        .pipe(builder.build())
        .pipe(gulp.dest(env.HTML_DEST));
      }, 100)
    } else {
      emailBuilderLoaded = true;
      return gulp.src([env.HTML_FILES])
      .pipe(builder.build())
      .pipe(gulp.dest(env.HTML_DEST));
    }
  }
};
