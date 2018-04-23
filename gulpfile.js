var gulp = require("gulp");
var webserver = require("gulp-webserver");
var connect = require("gulp-connect");
var objAjax = require("./src/data/data.json")

gulp.task("reloadPage", function() {
    gulp.src(".")
        .pipe(connect.reload())
})

gulp.task("watch", function() {
    gulp.watch("./index.html", ["reloadPage"])
})

gulp.task("webserver", function() {
    gulp.src(".")
        .pipe(webserver({
            port: 8080,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url === "/index") {
                    res.end(JSON.stringify(objAjax))
                }
                next()
            }
        }))
})

gulp.task("default", ["reloadPage", "watch", "webserver"])