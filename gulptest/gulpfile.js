var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

var del = require('del');


var source_root = 'C:\\TZLocalProjects\\TZ.Website\\Trunk\\Source\\revamp.tz.net\\htdocs\\wp-content/';
var dest_root = 'build/';

var paths = {
	scripts: [
		source_root + 'js/jquery.waypoints.min.js',
		source_root + 'js/bootstrap.min.js',
		source_root + 'js/d3.min.js',
		],
	styles_noncustom: [
		source_root + 'plugins/aqua-page-builder/assets/stylesheets/aqpb-view.css',
		source_root + 'plugins/purethemes-shortcodes/css/shortcodes.css',
		source_root + 'plugins/contact-form-7/includes/css/styles.css',

		source_root + 'themes/tz-astrum/css/bootstrap.min.css',
		source_root + 'themes/tz-astrum/css/animate.min.css',

		source_root + 'themes/astrum-theme/css/base.css',
		source_root + 'themes/astrum-theme/css/responsive.css',
		source_root + 'themes/astrum-theme/css/icons.css',
		// source_root + 'themes/astrum-theme/style.css',

		source_root + 'themes/astrum-theme/css/woocommerce.css',


		],
	styles_custom:[
		source_root + 'themes/astrum-theme/style.css',
		source_root + 'themes/tz-astrum/style.css',
	],
};


gulp.task('clean:js', function(cb){
	del([
		dest_root + 'js/**'
		], cb);
});

gulp.task('clean:css', function(cb){
	del([
		dest_root + 'css/**',
		dest_root + '*.css'
		], cb);
});

gulp.task('concat:scripts', ['clean:js'], function(){
	return gulp.src(paths.scripts, {base: source_root})
	.pipe(concat('all.js'))
	.pipe(gulp.dest(dest_root + '/js'))
	.pipe(uglify())
	.pipe(rename('all.min.js'))
	.pipe(gulp.dest(dest_root + '/js'))
	.on('error', gutil.log);
});


gulp.task('concat-noncustom:css', ['clean:css'], function(){
	return gulp.src(paths.styles_noncustom, {base: source_root})
	.pipe(concat('noncustom.css'))
	.pipe(gulp.dest(dest_root  + '/css'))
	.pipe(minifyCSS())
	.pipe(rename('noncustom.min.css'))
	.pipe(gulp.dest(dest_root + '/css'))
	.on('error', gutil.log);
});

gulp.task('concat-custom:css', [], function(){
	return gulp.src(paths.styles_custom, {base: source_root})
	.pipe(concat('custom.css'))
	.pipe(gulp.dest(dest_root ))
	.pipe(minifyCSS())
	.pipe(rename('custom.min.css'))
	.pipe(gulp.dest(dest_root))
	.on('error', gutil.log);
});



gulp.task('watch:css', function(){
	gulp.watch(source_root + '**/*.css', ['concat-noncustom:css']);
});


gulp.task('yo', function(){console.info('yo');});

gulp.task('default', ['concat-noncustom:css', 'concat-custom:css']);

