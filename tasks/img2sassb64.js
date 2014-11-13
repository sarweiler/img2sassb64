/*
 * img2sassb64
 * https://github.com/sarweiler/img2sassb64
 *
 * Copyright (c) 2014 Sven Arweiler
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('img2sassb64', 'Converts image files to Base64 and saves them as SASS variables', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      sassSyntax: false,
      replaceAtSign: "_"
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        if(grunt.file.exists(filepath)) {

          var endOfLine = options.sassSyntax ? '' : ';';

          var fileName;
          var fileNameMatch = filepath.match(/.*\/(.+$)/);
          if(fileNameMatch !== null && typeof fileNameMatch[1]) {
            fileName = fileNameMatch[1].toLowerCase();
          } else {
            // Something went wrong.
            grunt.fail.warn('No file name for file \'' + filepath + '\'. Skipping ...');
          }

          var varName = '$' + fileName.replace(/\./, '_').replace(/@/, options.replaceAtSign);
          var matchFileExtension = fileName.match(/.*\.(.+)$/);

          var fileExtension;
          if(matchFileExtension !== null && typeof matchFileExtension[1]) {
            fileExtension = matchFileExtension[1].toLowerCase();
          } else {
            // Something went wrong.
            grunt.fail.warn('No file extension for file \'' + filepath + '\'. Cannot determine image format. Skipping ...');
          }

          // Read file and Base64 encode it
          return varName + ': ' + '"data:image/' + fileExtension + ';base64,' + grunt.file.read(filepath, {encoding: null}).toString('base64') + '"' + endOfLine;
        }
      }).join(grunt.util.linefeed);

      // Write the destination file.
      grunt.file.write(file.dest, src + grunt.util.linefeed);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
