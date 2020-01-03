// gulpプラグインの読み込み
const gulp = require("gulp");
const sass = require("gulp-sass");
var sassGlob = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var assets = require('postcss-assets');
var mqpacker = require('css-mqpacker');

// style.scssをタスクを作成する
gulp.task("sass", function() {
  // style.scssファイルを取得
  return (
    gulp
      .src("src/sass/**/*.scss")
      .pipe(sassGlob())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(postcss([mqpacker()]))
      .pipe(postcss([assets({loadPaths: ['src/**'], relative: true})]))
      .pipe(postcss([autoprefixer()]))
      // cssフォルダー以下に保存
      .pipe(gulp.dest("src/css"))
  );
});

gulp.task('default', function () {
  gulp.watch('src/sass/**/*.scss', gulp.task('sass'));
});