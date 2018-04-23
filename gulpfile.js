var gulp = require("gulp");
var webserver = require("gulp-webserver");
var connect = require("gulp-connect");

gulp.task("reloadPage", function() {
    gulp.src(".")
        .pipe(connect.reload())
})

gulp.task("watch", function() {
    gulp.watch("./index.html", ["reloadPage"])
})
gulp.task("default", ["reloadPage"])