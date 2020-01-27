'use strict';

const gulp = require('gulp'),
      requireDir = require('require-dir'),
      tasks = requireDir('./.gulp/tasks'),
      envConfig = require('dotenv').config(),
      env = envConfig.parsed,
      browserSync = require('browser-sync');

function reload(cb) {
  browserSync.reload();
  cb();
};

// Notifications
gulp.task('notification', (cb) => {
  tasks.notification.default('Theme', 'Ready...🦉');
  cb();
});

gulp.task('notification:images', (cb) => {
  tasks.notification.default('Images', 'Saved...☄️');
  cb();
});

// Styles
gulp.task('styles', (cb) => {
  tasks.styles.dev(env);
  cb();
});

// Email Builder
gulp.task('emailBuilder', (cb) => {
  tasks.emailBuilder.dev(env);
  cb();
});

// Browsersync
gulp.task('browserSync', (cb) => {
  tasks.browserSync.default(env);
  cb();
});

// Images
gulp.task('image:min', (cb) => {
  tasks.imageMin.dev(env);
  cb();
});

gulp.task('image:clean', (cb) => {
  tasks.imageMin.clean(env);
  cb();
});

gulp.task('images', gulp.parallel(['image:clean'], ['image:min'], ['notification:images']));

// Watch
gulp.task('watch', () => {
  gulp.watch([env.SCSS_FILES, env.HTML_FILES], gulp.series(['styles'], ['emailBuilder'], reload));
  gulp.watch(env.IMG_FILES, gulp.series(['image:min'], reload));
});

// Default
gulp.task('default', gulp.series(['images'], ['styles'], ['emailBuilder'], ['browserSync'], ['notification'], ['watch']));
