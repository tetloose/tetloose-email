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

// Partials
gulp.task('partials', (cb) => {
  tasks.partials.compile(env);
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

gulp.task('images', gulp.parallel(['image:clean'], ['image:min']));

// Email Builder
gulp.task('emailBuilder', (cb) => {
  tasks.emailBuilder.dev(env);
  cb();
});

gulp.task('emailBuilder:test', (cb) => {
  tasks.emailBuilder.test(env);
  cb();
});

// Watch
gulp.task('watch', (cb) => {
  gulp.watch([env.SCSS_FILES, env.HTML_TEMPLATES, env.HTML_PARTIALS], gulp.series(['partials'], ['styles'], ['emailBuilder'], reload));
  gulp.watch(env.IMG_FILES, gulp.series(['images'], reload));
  cb();
});

// Build
gulp.task('build', gulp.series(['images'], ['partials'], ['styles'], ['emailBuilder']));

// Test
gulp.task('test', gulp.series(['build'], ['emailBuilder:test']));

// Default
gulp.task('default', gulp.series(['build'], ['emailBuilder'], ['browserSync'], ['watch']));
