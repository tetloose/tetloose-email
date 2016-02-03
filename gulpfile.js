//-----------------------------------------------------------------------------------
// PATHS
//-----------------------------------------------------------------------------------
var devPath = 'dev/',
    appPath = 'app/',
    gulpPath = 'gulp/';


var paths = {
    scss: {
        reset: './'+devPath+'scss/reset.scss',
        inline: './'+devPath+'scss/inline.scss',
        mobile: './'+devPath+'scss/mobile.scss',
        files: './'+devPath+'scss/**/*',
        dest: './'+appPath+'stylesheet/'
    },
    images: {
        files: './'+appPath+'images/**/*',
        dest: './'+appPath+'images/',
        alertIconHappy: './'+gulpPath+'notifications/happy.png',
        alertIconSad: './'+gulpPath+'notifications/sad.png'
    },
    html: {
        src: './'+devPath+'template/index.html',
        dest: './'+appPath,
        litmus: './'+appPath+'index.html'
    }
}


//-----------------------------------------------------------------------------------
// GULP
//-----------------------------------------------------------------------------------
var gulp = require('gulp');


//-----------------------------------------------------------------------------------
// ERROR HANDLING AND NOTIFICATION
//-----------------------------------------------------------------------------------
var notifier = require('node-notifier'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');


//-----------------------------------------------------------------------------------
// SCSS TASK
//-----------------------------------------------------------------------------------
var autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');


//-----------------------------------------------------------------------------------
// IMAGE TASK
//-----------------------------------------------------------------------------------
var imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');


//-----------------------------------------------------------------------------------
// RUN SEQUENCE
//-----------------------------------------------------------------------------------
var runSequence = require('run-sequence');


//-----------------------------------------------------------------------------------
//  BROWSER SYNC
//-----------------------------------------------------------------------------------
var browserSync = require('browser-sync'),
    reload  = browserSync.reload;


//-----------------------------------------------------------------------------------
// EMAIL BUILDER
//-----------------------------------------------------------------------------------
var emailBuilder = require('gulp-email-builder'),
    testEmail = 'tetloose@litmustest.com, tetloose@gmail.com',
    subject = 'Gulp Email Test';



//-----------------------------------------------------------------------------------
// NOTIFICATIONS
//-----------------------------------------------------------------------------------
var cssError = function(e){
    var message = 'Line ' +e.line+ '\n' + e.file.split(devPath).pop() + e.message;
    notification(' ❌ CSS Fail ❌ ', message, true);
    console.log(' ❌ CSS Fail ❌ \n' + message);
    this.emit( 'end' );
}

function notification(title, message, icon){
    if (icon) {
        var icon = paths.images.alertIconSad;
    } else {
        var icon = paths.images.alertIconHappy;
    }
    notifier.notify({
        title: title,
        message: message,
        icon: icon,
        sound: true
    });
}


//-----------------------------------------------------------------------------------
// SCSS TASK
//-----------------------------------------------------------------------------------X
gulp.task('styles', function(){
    return gulp.src([paths.scss.reset,paths.scss.inline,paths.scss.mobile])
    .pipe(plumber({ errorHandler: cssError }))
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    }))
    .pipe(gulp.dest(paths.scss.dest));
});


//-----------------------------------------------------------------------------------
// IMAGE TASK
//-----------------------------------------------------------------------------------
gulp.task('image-min', function(){
    return gulp.src(paths.images.files)
    .pipe(imagemin({
        progressive: true,
        optimizationLevel: 7,
        interlaced: true ,
        use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.images.dest));
});

gulp.task('image-notification', function(){
    notification(' ✅ IMAGE MIN DONE ✅', 'Check terminal');
    console.log(' ✅ IMAGE MIN DONE ✅' );
});

gulp.task('images', function() {
    runSequence(['image-min'], ['image-notification']);
});


//-----------------------------------------------------------------------------------
// BROWSERSYNC
//-----------------------------------------------------------------------------------
gulp.task('browser-sync', function() {
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
            baseDir: paths.html.dest
        }
    });
});


//-----------------------------------------------------------------------------------
// EMAIL BUILDER
//-----------------------------------------------------------------------------------
gulp.task('inline', function() {
    return gulp.src([paths.html.src])
    .pipe(emailBuilder())
    .pipe(gulp.dest(paths.html.dest));
});


//-----------------------------------------------------------------------------------
// LITMUS TEST
//-----------------------------------------------------------------------------------
gulp.task('test-litmus', function() {
    return gulp.src([paths.html.litmus])
    .pipe(emailBuilder({
        emailTest: {
            email: testEmail,
            subject: subject
        }
    }));
});

gulp.task('litmus', function() {
    runSequence(['styles'], ['inline'], ['test-litmus']);
});


//-----------------------------------------------------------------------------------
// WATCH TASK
//-----------------------------------------------------------------------------------
gulp.task('watch', function() {
    gulp.watch(paths.scss.files).on('change', function(e) {
        runSequence(['styles'], ['inline'], reload);
        notification(' ✅ STYLES SAVED ✅ ', e.path.split(devPath).pop());
        console.log(' ✅ STYLES SAVED ✅ ' + e.path.split(devPath).pop());
    });
    gulp.watch(paths.html.src).on('change', function(e) {
        runSequence(['styles'], ['inline'], reload);
        notification(' ✅ HTML SAVED ✅ ', e.path.split(devPath).pop());
        console.log(' ✅ HTML SAVED ✅ ' + e.path.split(devPath).pop());
    });
});


//-----------------------------------------------------------------------------------
// DEFAULT TASK
//-----------------------------------------------------------------------------------
gulp.task('default-notification', function(){
    notification('✅ READY TO ✅ ', 'Gulp one off!');
    console.log('✅ READY TO ✅ ', 'Gulp one off!');
});

gulp.task('default', function(){
    runSequence(['browser-sync'], ['styles'], ['inline'], ['watch'], ['default-notification']);
});
