# img2sassb64

> A grunt task to convert image files to Base64 and save them as SCSS or SASS variables in a single file.

If you save the generated file as a partial (e.g. `_icons.scss`) you can easily import the file to your SCSS or SASS file and access the graphics via the variable names.

Variable names will be the file names with '.' replaced by '_'. For example, `icon.png` will be `$icon_png`.

Use this plugin together with a watch to have your graphics processed as soon as you place them in the given directory.


## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-img2sassb64 --save-dev
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

#### options.replaceAtSign
Type: `String`
Default value: `_`

Set a string to replace `@` in file names with. For example `img@2x.jpg` will be stored in a variable named `$img_2x_jpg` when using the default.


### Usage Examples

#### Default Options

In this example all PNG files found in `images/icons` and all GIF and JPG files in `images/more_icons` will be processed using *SCSS* syntax and the output will be written to `dest/_icons.scss`.

```js
grunt.initConfig({
  img2sassb64: {
    files: {
      'dest/_icons.scss': ['images/icons/*.png', 'images/more_icons/*.gif', 'images/more_icons/*.jpg'],
    },
  },
})
```

#### Custom Options

In this example all PNG files found in `images/icons` and all GIF and JPG files in `images/more_icons` will be processed using *SASS* syntax and the output will be written to `dest/_icons.scss`.

```js
grunt.initConfig({
  img2sassb64: {
    options: {
      sassSyntax: true,
      replaceAtSign: 'AT'
    },
    files: {
      'dest/_icons.scss': ['images/icons/*.png', 'images/more_icons/*.gif', 'images/more_icons/*.jpg'],
    }
  }
})
```

## Release History

* 0.1.3 Added option to replace @ with string in file name (default: "_")
* 0.1.2 Fixed missing quotes in generated output
* 0.1.1 Updated documentation
* 0.1.0 Changed directory input to file input to be more flexible
* 0.0.4 First version


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Sven Arweiler. Licensed under the MIT license.
