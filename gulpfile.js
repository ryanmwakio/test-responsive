const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const cssnano = require("cssnano"); // Import cssnano
const rename = require("gulp-rename");
const watch = require("gulp-watch");

// Paths
const cssSrc = "dev.css";
const cssDest = "./";

// Process CSS with PostCSS, Autoprefixer, and cssnano
function processCSS() {
  const processors = [
    postcssImport(),
    autoprefixer(),
    cssnano(), // Apply cssnano for minification
  ];

  return gulp
    .src(cssSrc)
    .pipe(postcss(processors))
    .pipe(rename("styles.css"))
    .pipe(gulp.dest(cssDest));
}

// Watch for changes in dev.css
function watchCSS() {
  gulp.watch(cssSrc, processCSS);
}

// Default task
gulp.task("default", gulp.series(processCSS, watchCSS));
