
const gulp = require("gulp");
const runSequence = require("run-sequence");

global.watch = [];
global.build = [];

global.src = "./frontend/";
global.dest = "./public/";

require("./frontend/libs/gulp/pug.js")
require("./frontend/libs/gulp/sass.js")
require("./frontend/libs/gulp/webpack.js")
require("./frontend/libs/gulp/browserSync.js")


gulp.task("watch",global.watch)

gulp.task("build",(cb)=>{
    global.build.push(cb)
    runSequence.apply(this,global.build)
})

gulp.task("default",["watch"])
