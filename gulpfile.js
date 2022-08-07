const gulp = require("gulp"),
    rename = require("gulp-rename"),
    fs = require("fs")

function copyVendorLibs(cb) {
    try {
        fs.unlinkSync('public/vendor/alpine.min.js')
    } catch (err) {
        console.log(err)
    }
    try {
        fs.unlinkSync('public/vendor/list.min.js')
    } catch (err) {
        console.log(err)
    }
    try {
        fs.unlinkSync('public/vendor/nprogress/nprogress.js')
    } catch (err) {
        console.log(err)
    }
    try {
        fs.unlinkSync('public/vendor/nprogress/nprogress.css')
    } catch (err) {
        console.log(err)
    }

    gulp.src('node_modules/alpinejs/dist/cdn.min.js')
        .pipe(rename('alpine.min.js'))
        .pipe(gulp.dest('public/vendor'));
    gulp.src('node_modules/list.js/dist/list.min.js')
        .pipe(gulp.dest('public/vendor'));
    gulp.src('node_modules/nprogress/nprogress.js')
        .pipe(gulp.dest('public/vendor/nprogress'));
    gulp.src('node_modules/nprogress/nprogress.css')
        .pipe(gulp.dest('public/vendor/nprogress'));
    cb()
}

exports.default = copyVendorLibs