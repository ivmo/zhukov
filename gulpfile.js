var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var run = require("run-sequence");
var del = require("del");


gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker({
        sort: false
      })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});



gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2,ttf}",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
  // .pipe(server.stream());
});

gulp.task("html:copy", function() {
   return gulp.src("*.html")
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
});

gulp.task("html:update", ["html:copy"], function(done) {
   server.reload();
   done();
});

gulp.task("build", function (fn) {
  run(
    "clean",
    "copy",
    "style",
    // "images",
    fn
  );
});

gulp.task("serve", function() {
  server.init({
    server: "build"
  });

  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html", ["html:update"]);
  gulp.watch("*.html").on("change", server.reload);
});
