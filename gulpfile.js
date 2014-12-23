var gulp = require('gulp');
var importer = require('./index.js');

gulp.task('import-svg', function(cb) {
  importer.importSvg(cb);
});

gulp.task('get-icon-font', ['import-svg'], function(cb) {
    importer.getFont({
        host           : 'http://fontello.com',
        config         : 'config.json',
        css : 'css',
        font : 'fonts'
    },cb);
});

gulp.task('get-example', ['import-svg'], function(cb) {
    importer.getFont({
        host : 'http://fontello.com',
        config: 'config.json'
    }, cb);
});

gulp.task('default', ['get-icon-font'], function(cb) {
    console.log("update icon font finished!");
});
