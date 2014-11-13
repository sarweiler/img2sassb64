/*
 * img2sassb64
 * https://github.com/sarweiler/img2sassb64
 *
 * Copyright (c) 2014 Sven Arweiler
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    img2sassb64: {
      single_file_scss_test: {
        files: {
          'tmp/single_file_scss': ['test/fixtures/123.png']
        }
      },
      single_file_sass_test: {
        options: {
          sassSyntax: true
        },
        files: {
          'tmp/single_file_sass': ['test/fixtures/123.png']
        }
      },
      multi_file_scss_test: {
        files: {
          'tmp/multi_file_scss': ['test/fixtures/*.png', 'test/fixtures/*.jpg', 'test/fixtures/*.gif', 'test/fixtures_2/*.jpg']
        }
      },
      multi_file_sass_test: {
        options: {
          sassSyntax: true
        },
        files: {
          'tmp/multi_file_sass': ['test/fixtures/*.png', 'test/fixtures/*.jpg', 'test/fixtures/*.gif', 'test/fixtures_2/*.jpg']
        }
      },
      multi_file_atsign_test: {
        options: {
          replaceAtSign: "AT"
        },
        files: {
          'tmp/multi_file_atsign_scss': ['test/fixtures/*.png', 'test/fixtures/*.jpg', 'test/fixtures/*.gif', 'test/fixtures_2/*.jpg']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'img2sassb64', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
