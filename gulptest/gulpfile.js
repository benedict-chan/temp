var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

var del = require('del');


var source_root = 'source/';
var paths = {
	scripts: [
		source_root + 'js/jquery.waypoints.min.js',
		source_root + 'js/bootstrap.min.js',
		source_root + 'js/d3.min.js',
		],
	styles: [
		source_root + 'css/animate.min.css',
		source_root + 'css/bootstrap.min.css',
		]
};


gulp.task('clean', function(cb){
	del([
		'build'
		], cb);
});

gulp.task('concat:scripts', ['clean'], function(){
	return gulp.src(paths.scripts, {base: source_root})
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./build/js'))
	.pipe(uglify())
	.pipe(rename('all.min.js'))
	.pipe(gulp.dest('./build/js'))
	.on('error', gutil.log);
});


gulp.task('concat:styles', ['clean'], function(){
	return gulp.src(paths.styles, {base: source_root})
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./build/'))
	.pipe(minifyCSS())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('./build/'))
	.on('error', gutil.log);
});


gulp.task('default', ['concat:scripts', 'concat:styles']);
