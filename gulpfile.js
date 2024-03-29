const gulp = require("gulp");
const terser = require("gulp-terser"),
	rename = require("gulp-rename"),
	eslint = require("gulp-eslint"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	prettyError = require("gulp-prettyerror"),
	cssnano = require("gulp-cssnano");

const browserSync = require("browser-sync").create();

gulp.task("sass", function() {
	return gulp
		.src("./sass/style.scss")
		.pipe(sass())
		.pipe(prettyError())
		.pipe(
			autoprefixer({
				overrideBrowserslisters: ["last 2 versions"]
			})
		)
		.pipe(cssnano())
		.pipe(rename({ extname: ".min.css" }))
		.pipe(gulp.dest("./build/css"));
});

gulp.task("browser-sync", function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task("scripts", function() {
	return gulp
		.src("./js/*.js")
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
		.pipe(terser())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(gulp.dest("./build/js"));
});

gulp.task("say_hello", function(end) {
	console.log("Hello!");
	end();
});

gulp.task("reload", function(done) {
	browserSync.reload();
	done();
});

gulp.task("watch", function() {
	gulp.watch("js/*.js", gulp.series("scripts", "reload"));
	gulp.watch("sass/*.scss", gulp.series("sass", "reload"));
	gulp.watch("index.html", gulp.series("reload"));
});

gulp.task("default", gulp.parallel("browser-sync", "watch", "scripts", "sass"));
