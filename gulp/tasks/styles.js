'use strict';

const gulp = require('gulp'),
postCSS = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
scss = require('gulp-sass');

gulp.task('styles',()=>{
    return gulp.src('./app/assets/styles/styles.scss')
    .pipe(scss())
    .on('error', function(error){
        console.log(error);
        this.emit('end');
    })
    .pipe(postCSS([autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
});


