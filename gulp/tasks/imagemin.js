const gulp = require('gulp');
const imagmin = require('gulp-imagemin');

gulp.task('images', ()=>{
    return gulp.src('./src/dist/img/**/*.{png, jpg, gif}')
    .pipe(imagmin([
        imagmin.optipng({optimizationLevel: 3}),
        imagmin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('build/img'));
})