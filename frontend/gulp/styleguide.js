"use strict"

var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var outputPath = 'styleguide';

const {src,dest,scss_option} = global;

gulp.task('styleguide:generate', function() {
    return gulp.src(src+'assets/scss/*.scss')
        .pipe(styleguide.generate({
            title: 'My Styleguide',
            server: true,
            rootPath: outputPath,
            overviewPath: 'README.md'
        }))
        .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
    return gulp.src(src+'assets/scss/common.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(outputPath));
});

gulp.task('watch', ['styleguide'], function() {
    // Start watching changes and update styleguide whenever changes are detected
    // Styleguide automatically detects existing server instance
    gulp.watch(['*.scss'], ['styleguide']);
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);


gulp.task("styleguide:watch",()=>{
    let target = [
        `${src}assets/scss/**/*.scss`,
    ];
    return gulp.watch(target,['styleguide:generate', 'styleguide:applystyles'])
});

//global.watch.push("styleguide:watch")
//global.build.push("styleguide:generate")
//global.build.push("styleguide:applystyles")
