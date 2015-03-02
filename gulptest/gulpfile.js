var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');


var source_root = 'source/';
var paths = {
	scripts: [
		source_root + 'js/jquery.waypoints.min.js',
		source_root + 'js/bootstrap.min.js',
		source_root + 'js/d3.min.js',
		]
};


gulp.task('clean:scripts', function(cb){
	del([
		'build'
		], cb);
});

gulp.task('concat:scripts', ['clean:scripts'], function(){
	return gulp.src(paths.scripts, {base: source_root})
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./build/js'));
});

gulp.task('default', ['concat:scripts']);
