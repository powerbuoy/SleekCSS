var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');

function sassTask (src) {
	return gulp.src(src)
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(autoprefixer())
		.pipe(gulp.dest('.'));
}

gulp.task('sass', function () {
	return sassTask('sleek-css.scss');
});

gulp.task('default', gulp.series('sass'));
