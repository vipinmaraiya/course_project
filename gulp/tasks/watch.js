'use strict';

const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch',()=>{
    browserSync.init({
        server:{
            baseDir:"app"
        }
    })

    watch('./app/index.html', ()=>{

        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.scss', ()=>{
        gulp.start('cssInject');
    });
});

gulp.task('cssInject',['styles'], function(){
    gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream())

});