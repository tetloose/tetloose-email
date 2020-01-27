const browserSync = require('browser-sync');

module.exports = {
  default: (env) => {
    browserSync({
      open: 'true',
      notify: false,
      logFileChanges: false,
      logSnippet: false,
      ogLevel: "silent",
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: true
      },
      server: {
        baseDir: env.HTML_DEST
      }
    });
  }
};
