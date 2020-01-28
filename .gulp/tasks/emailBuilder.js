const gulp = require('gulp'),
      emailBuilder = require('gulp-email-builder-min'),
      emailSender = require('gulp-email-builder');

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
      .pipe(emailBuilder({
        encodeSpecialChars: true
      }).build())
      .pipe(gulp.dest(env.HTML_DEST));
    }
  },
  test: (env) => {
    return gulp.src([env.TEST_FILE])
    .pipe(emailSender({
      emailTest : {
        to : env.TEST_EMAIL_TO,
        from: env.TEST_EMAIL_FROM,
        subject : env.TEST_SUBJECT
      }
    }).sendEmailTest());
  }
};
