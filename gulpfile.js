var gulp = require('gulp');
var chai = require('chai');
var mocha = require('gulp-mocha');
var karma = require('karma');

gulp.task('default',["unit"],function(){
	console.log('My Default Task');
})

gulp.task('unit', ["karma"],function() {
	console.log('Run Unit Test With Mocha');
  return gulp.src(['test/*.test.js'], { read: false })
    .pipe(mocha({
      reporter: 'mochawesome',
      reporterOptions: {
        //reportDir: 'report',
        reportName: 'UnitTestReport',
        reportTitle: 'UnitTestReport'
        //inlineAssets: true
      },
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