# img2sassb64

> Converts image files to Base64 and saves them as SASS variables

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install img2sassb64 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('img2sassb64');
```

## The "img2sassb64" task

### Overview
In your project's Gruntfile, add a section named `img2sassb64` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  img2sassb64: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.sassSyntax
Type: `boolean`
Default value: `false`

Set this to `true` if you want to use SASS syntax instead of SCSS syntax.


### Usage Examples

#### Default Options

In this example all files found in `images/icons` and in `images/more_icons` will be processed using *SCSS* syntax and the output will be written to `dest/_icons.scss`.

```js
grunt.initConfig({
  img2sassb64: {
    files: {
      'dest/_icons.scss': ['images/icons', 'images/more_icons'],
    },
  },
})
```

#### Custom Options

In this example all files found in `images/icons` and in `images/more_icons` will be processed using *SASS* syntax and the output will be written to `dest/_icons.scss`.

```js
grunt.initConfig({
  img2sassb64: {
    options: {
      sassSyntax: true
    },
    files: {
      'dest/_icons.scss': ['images/icons', 'images/more_icons'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Sven Arweiler. Licensed under the MIT license.
