'use strict';

const gulp = require('gulp'),
watch = require('gulp-watch'),
postCSS = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
browserSync = require('browser-sync').create();

gulp.task('default', ()=>{
    console.log('default')
});

gulp.task('html',()=>{
    console.log('Html changes');
});

gulp.task('styles',()=>{
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postCSS([cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
});

gulp.task('watch',()=>{
    browserSync.init({
        server:{
            baseDir:"app"
        }
    })

    watch('./app/index.html', ()=>{

        browserSync.reload();
    });
    watch('./app/assets/styles/styles.css', ()=>{
        browserSync.reload();
    });
});