var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var styleguidejs = require('gulp-styleguidejs');
var clean = require('gulp-clean');

// TODO: Generate styleguidejs documentation from all config-files ()
var generateConfigDocs = function (stream) {
	return stream;
};

// Cleanup
gulp.task('cleanup', function () {
	return gulp.src(['sleek-css.css', 'styleguide.html'])
		.pipe(clean());
});

// SASS
gulp.task('sass', ['cleanup'], function () {
	return gulp.src('sleek-css.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('.'));
});

// TODO: Generate config documentation
gulp.task('config-docs', function () {
	return gulp.src('config/*.scss');
});

// Styleguide
gulp.task('styleguide', ['sass', 'config-docs'], function () {
	return gulp.src('sleek-css.css')
		.pipe(styleguidejs({
			templateCss: __dirname + '/styleguide/style.css',
			templateJs: __dirname + '/styleguide/script.js',
			template: __dirname + '/styleguide/template.jade',
			outputFile: __dirname + '/styleguide.html'
		}))
});

// Deault/watch
gulp.task('default', ['styleguide']);

gulp.task('watch', ['default'], function () {
	gulp.watch('**/*.scss', ['styleguide']);
});
