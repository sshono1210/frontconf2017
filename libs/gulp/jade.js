"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const {src,dest,jade_option} = global;

gulp.task("jade",()=> {
    let options = (jade_option)?jade_option:{
        locals:{},
        pretty: true
    };
    let srcPattern = [
        `${src}assets/tmpl/**/*.jade`,
        `!${src}assets/tmpl/**/_*`,
    ];
    gulp.src(srcPattern)
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.jade(options))
        .pipe(gulp.dest(`${dest}/`));
});

gulp.task("jade:watch",()=>{
    let target = [
        `${src}assets/tmpl/**/*.jade`,
    ];
    gulp.watch(target,["jade"])
});

global.watch.push("jade:watch")
global.build.push("jade")
