var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('do-something', function() {
  console.log(arguments);
  console.log('I did something!');
});

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less(
    //   {
    //   paths: [ path.join(__dirname, 'less', 'includes') ]
    // }
    ))
    .pipe(gulp.dest('css'));
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

gulp.task('serve', [ 'less' ], function(){
  browserSync.init({
    server: "./_site"

  });
  gulp.watch("less/*.less", ['less']);
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

gulp.task('build', [ 'clean', 'less' ], function(){
  gulp.src(['src/*', '!src/less'])
  //gulp.from()
  .pipe(gulp.dest('dist/')); //gulp.into()
});
