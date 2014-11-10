'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.img2sassb64 = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  single_file_scss: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/single_file_scss');
    var expected = grunt.file.read('test/expected/single_file_scss');
    test.equal(actual, expected, 'should generate a SCSS file with one file.');

    test.done();
  },
  multi_file_scss: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multi_file_scss');
    var expected = grunt.file.read('test/expected/multi_file_scss');
    test.equal(actual, expected, 'should generate a SCSS file with multiple files and file formats.');

    test.done();
  },
  single_file_sass: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/single_file_sass');
    var expected = grunt.file.read('test/expected/single_file_sass');
    test.equal(actual, expected, 'should generate a SASS file with one file.');

    test.done();
  },
  multi_file_sass: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/multi_file_sass');
    var expected = grunt.file.read('test/expected/multi_file_sass');
    test.equal(actual, expected, 'should generate a SCSS file with multiple files and file formats.');

    test.done();
  }
};
