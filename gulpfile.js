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

// Email Builder
gulp.task('emailBuilder', (cb) => {
  tasks.emailBuilder.dev(env);
  cb();
});

gulp.task('emailBuilder:test', (cb) => {
  tasks.emailBuilder.test(env);
  cb();
});

gulp.task('test', gulp.parallel(['image:clean'], ['image:min'], ['styles'], ['emailBuilder'], ['emailBuilder:test']));

// Watch
gulp.task('watch', (cb) => {
  gulp.watch([env.SCSS_FILES, env.HTML_FILES], gulp.series(['styles'], ['emailBuilder'], reload));
  gulp.watch(env.IMG_FILES, gulp.series(['images'], reload));
  cb();
});

// Build
gulp.task('build', gulp.series(['images'], ['styles'], ['emailBuilder']));

// Default
gulp.task('default', gulp.series(['images'], ['styles'], ['emailBuilder'], ['browserSync'], ['notification'], ['watch']));
