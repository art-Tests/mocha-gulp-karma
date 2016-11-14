var gulp = require('gulp');
var chai = require('chai');
var mocha = require('gulp-mocha');
var karma = require('karma');

gulp.task('default',["unittest"],function(){
	console.log('My Default Task');
})

gulp.task('unittest', ["karma"],function() {
	console.log('Run Unit Test With Mocha');
  return gulp.src(['test/*.test.js'], { read: false })
    .pipe(mocha({
      reporter: 'mochawesome',
      globals: {
        should: require('chai')
      }
    }));
});


gulp.task('karma', function (done) {
  karma.server.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});