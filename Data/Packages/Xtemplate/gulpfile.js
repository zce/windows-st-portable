'use strict';
var gulp = require('gulp');
var lintspaces = require("gulp-lintspaces");
var map = require('map-stream');
var gutil = require('gulp-util');
var path = require('path');
var _forin = require('lodash.forin');
var copy = require('gulp-copy')
var markdown = require('markdown-creator');
var XMLMapping = require('xml-mapping');
var fs = require('fs')
var osplatform = require('os').platform()
var gulpif = require('gulp-if');
var clean = require('gulp-clean')


var isMac = osplatform === 'darwin';
var docName = 'SNIPPETS.md';
var paths = {
  snippets: 'Snippets/**/*.*',
  language: 'Syntaxes/**/*.*'
}

var packageFloder = {
  'mac' : '../../../Library/Application Support/Sublime Text 3/Packages/User/Xtemplate',
  'win' : 'C:/Users/Administrator/AppData/Roaming/Sublime Text 3/Packages/User/Xtemplate'
}

var snippetsHeader = ['trigger', 'description', 'export']
var snippetsObj = {};
// check tabTrigger
gulp.task('lint', function() {
  return gulp
    .src(paths.snippets)
    .pipe(lintspaces({
      editorconfig: '.editorconfig'
    }))
    .pipe(lintspaces.reporter());
});

gulp.task('clean:dev', function() {
  var pathUri = isMac ? packageFloder.mac : packageFloder.win
  gutil.log(gutil.colors.green('清空目录')+':'+pathUri)
  return gulp
    .src(pathUri)
    .pipe(clean({
      'force': true
    }))
})

var buildDoc = function(file, cb) {
  var dirname = path.dirname(file.path).split(path.sep)
  var folderName = dirname[dirname.length - 1];
  if (typeof snippetsObj[folderName] === 'undefined') {
    snippetsObj[folderName] = []
  };
  var contentText = String(file.contents);
  var XMLObj = XMLMapping.tojson(contentText, {
    nested: false,
    longTag: true
  }).snippet;
  var tabName = XMLObj.tabTrigger.$text;
  var desc = XMLObj.description.$text || XMLObj.description.$cdata;
  var content = XMLObj.content.$cdata;
  content = content.replace(/[\n\t\r]/gm, '')
  while (/\$\{\d(?:\:?)([ \w\'\"\/\=\>\<\!\,\[\]]+)?\}/.test(content)) {
    content = content.replace(/\$\{\d(?:\:?)([ \w\'\"\/\=\>\<\!\,\[\]]+)?\}/g, '$1')
  }
  content = content.replace('$0', '')
  snippetsObj[folderName].push([tabName, '`' + desc + '`', '```' + content + '```']);
  cb(null, file)
}

gulp.task('doc', function(done) {
  return gulp
    .src(['Snippets/**/*.sublime-snippet'])
    .pipe(map(buildDoc))
    .on('end', function() {
      fs.writeFileSync(docName, markdown.title('Snippets List', 1))
      _forin(snippetsObj, function(val, key) {
        var markdownArray = snippetsObj[key];
        fs.appendFileSync(docName, markdown.title(key, 2))
        var tab = markdown.table(snippetsHeader, markdownArray.sort())
        fs.appendFileSync(docName, tab)
      })
      gutil.log(gutil.colors.green("文档构建成功!"))
    })
});

gulp.task('dev', ['clean:dev'], function() {
  return gulp
    .src(['Preferences/*.*', 'Syntaxes/**/*', 'Snippets/**/*', '*.tmTheme', '*.sublime-settings', 'Completions/**/*'])
    .pipe(
      gulpif(
        isMac,
        copy(packageFloder.mac),
        copy(packageFloder.win)
      )
    )
})

gulp.task('default', ['lint']);