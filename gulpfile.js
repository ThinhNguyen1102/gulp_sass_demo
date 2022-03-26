const gulp = require("gulp");
const gfi = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./build/css"));
}

function buildInclude() {
  return gulp.src("./view/**/*.html").pipe(gfi()).pipe(gulp.dest("./build"));
}

function watchTask() {
  gulp.watch("./sass/**/*.scss", buildStyles);
  gulp.watch("./view/**/*.html", buildInclude);
}

exports.default = gulp.series(buildStyles, buildInclude, watchTask);
