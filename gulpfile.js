
var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    changed      = require('gulp-changed'),
    header       = require('gulp-header'),
    notify       = require('gulp-notify'),
    plumber      = require('gulp-plumber'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    pkg          = require('./package.json');

var devInfo =
[
    '',
    '/*!',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @author <%= pkg.author %>',
    ' * @contributors <%= pkg.contributors %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.url %>',
    ' * @license <%= pkg.license %>',
    ' */',
    '',
    ''
].join('\n');

var dist = './dist',
    scss = [ './source/*.scss',  './source/includes/*.scss',  './source/selectors/*.scss' ];

gulp.task('styles', function ()
{
    return gulp.src(scss)
    .pipe(plumber())
    .pipe(changed(dist))
    .pipe(header(devInfo, { pkg: pkg }))
    .pipe(sourcemaps.init())
    .pipe(sass({ precision: 4, outputStyle: 'compressed' }))
    .pipe(autoprefixer(
    {
        browsers: ['last 3 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('../map'))
    .pipe(gulp.dest(dist))
    .pipe(notify('first: Built'));
});

gulp.task('default', ['styles'], function ()
{
    gulp.watch(scss, ['styles']);
});
