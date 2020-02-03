var gulp = require('gulp');
var sass = require('gulp-sass');

const sassTask = (cb) => {
    gulp.src(['src/theme-1.scss'])
        .pipe(sass({
            includePaths:["node_modules/bootstrap/scss/"],
            outputStyle: 'compressed'}))
        .pipe(gulp.dest('../static/assets/css'));
    cb();
};

exports.default =gulp.series(sassTask);