var gulp = require('gulp');

gulp.task('do-something', function() {
  console.log(arguments);
  console.log('I did something!');
});

gulp.task('sass', function(){
  // node-sass src/scss/main.scss -o src/css/
  var sass = require('gulp-sass');

  return gulp.src('scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
}); //END gulp.task(sass)


var browserSync = require('browser-sync').create();

gulp.task('serve', [ 'sass' ], function(){
  browserSync.init({
    server: "./_site"

  });
  gulp.watch("scss/*.scss", ['sass']);
  gulp.watch("./_site/*.html").on('change', browserSync.reload);
  gulp.watch("js/**/*.js").on('change', browserSync.reload);
});

gulp.task('watch:sass', function(){
  gulp.watch('scss/*.scss', [ 'sass' ], function(){
    console.log('In your Sass files...', 'Building your CSS');
  });
  gulp.watch('./_site/*.html', [ 'build' ]);
})

gulp.task('clean', function(done){
  var del = require('del');

  del([
    'dist/**/*.*',
    'dist/**/.*',
    '!dist/.gitignore'
  ], done);
})

gulp.task('default', [ 'serve' ]);

gulp.task('build', [ 'clean', 'sass' ], function(){
  gulp.src(['src/*', '!src/scss'])
  //gulp.from()
  .pipe(gulp.dest('dist/')); //gulp.into()
});
