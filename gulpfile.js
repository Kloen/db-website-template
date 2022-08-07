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

    gulp.src('node_modules/alpinejs/dist/cdn.min.js')
        .pipe(rename('alpine.min.js'))
        .pipe(gulp.dest('public/vendor'));
    gulp.src('node_modules/list.js/dist/list.min.js')
        .pipe(gulp.dest('public/vendor'));
    cb()
}

exports.default = copyVendorLibs