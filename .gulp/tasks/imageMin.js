const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      pngquant = require('imagemin-pngquant'),
      del = require('del');

module.exports = {
  dev: (env) => {
    return gulp.src(env.IMG_FILES)
    .pipe(imagemin({
      progressive: true,
      optimizationLevel: 7,
      interlaced: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest(env.IMG_DEST));
  },
  clean: (env) => {
    return del([env.IMG_BUILD])
  }
};
