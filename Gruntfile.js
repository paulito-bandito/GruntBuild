//
//  Uses: 
//    - grunt-cli v0.1.9
//    - grunt v0.4.1
//
module.exports = function(grunt) {

  //
  //  ====================================================
  //  Load external modules (that are installed when you 
  //  type 'npm install')
  //  ====================================================
  //
  grunt.loadNpmTasks('grunt-contrib');          // 
  grunt.loadNpmTasks('grunt-contrib-htmlmin');  // htmlmin
  grunt.loadNpmTasks('grunt-css');              // cssmin
  grunt.loadNpmTasks('grunt-contrib-uglify');   // uglify

  // tests
  grunt.loadNpmTasks('grunt-spell');            // spell
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  
  
  
  //
  //  ====================================================
  //  Main configuration of the tasks that grunt will run. 
  //  These are all configurable.
  //  ====================================================
  //
  grunt.initConfig({
    
    // make a local variable to reference the package.json object. 
    pkg: grunt.file.readJSON('package.json'),

    /**
      CLEAN TASK
    */
    clean: {
      build: ['build'],
      remainingFiles: ['build/css/<%= pkg.name %>.css', 'build/js/<%= pkg.name %>.js']
    },

    /**
      MINIFY THE CSS

      - http://stackoverflow.com/questions/13713273/how-to-concatenate-and-minify-multiple-css-and-javascript-files-with-grunt-js
    */
    cssmin: {
      css:{
        src: 'build/css/<%= pkg.name %>.css',
        dest: 'build/css/<%= pkg.name %>.min.css'
      }
    },

    /**
      CONCAT CSS and JavaScript FILES TOGETHER (javascript to javascript and vice-versa)
    */
    concat: {
      css: {
        src: ['src/css/*', 'lib/css/*'],
        dest: 'build/css/<%= pkg.name %>.css'
      },
      js: {
        src: ['src/js/*'],
        dest: 'build/js/<%= pkg.name %>.js'
      }
    }, 

    /**
      COPY CSS AND JS FILES FROM SRC TO BUILD

      NOTE: that this will look for your javascript file whose name is specified in package.json.
    */
    copy: {
      main: {
        files: [
          {src: ['src/index.html'], dest: 'build/index.html'}, // includes the index file in the build
          {expand: true, flatten: true, src: ['libs/js/**'], dest: 'build/js', filter: 'isFile'}, // put the already minified files into the js folder.
          {expand: true, flatten: true, src: ['src/media/**'], dest: 'build/media', filter: 'isFile'}, // put the already minified files into the js folder.
        
        ]
      }
    },

    /**
      Minify the HTML
    */
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'build/index.html': 'src/index.html'
        }
      }
    },

    /**
      UGLIFY: Minify the javascript files. 

      NOTE: the 'options' property will specify header text that will be inserted into the top of your 
            uglified file. This is useful during product deployment, so your client can report as to which
            build is being used. 
    */
    uglify: {
      options: {
        banner: '/*! Project name: \"<%= pkg.name %>\", version # <%= pkg.version %>\n Created on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n',
        mangle: true,     // rename all the variables to non sensical data. 
        compress: true,
        beautify: false,  // set this to true for debugging. It will make it human readable. 
        report: 'gzip'    // this will GZip the file decreasing the size SIGNIFICANTLY
      },
      build: {
        src: 'build/js/*.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },

    /**
      VERIFY JAVASCRIPT (is free of stupid syntax errors)
    */
    jshint: {
      // define the files to lint
      files: ['gruntfile.js', 'src/js/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    /**
      UNIT TESTS

      Run all the HTML tests. This will use Phantom.js which is a "headless" 
      (meaning non-graphical implementation) web browser. 
    */
    qunit: {
      files: ['test/*.html']
    },

    /**
      CHECK FOR SPELLING

      NOTE:   - Notice that you can specify the languages in the options. 
              - Also note that it will check whichever file you specify here. 
    */
    spell: {
      all: {
        src: ['index.html'],
        options: {
          lang: 'en'
        }
      }
    },

    /**
      WATCH: this will watch to see when you change a file, it will update it and export it to the build folder. 
    */
    watch: {
      files: ['Gruntfile.js','src/css/*.css', 'src/js/*.js', 'src/*.html'],
      tasks: 'default'
    }
  });

  //
  //  ==========================
  //    Register custom tasks. 
  //  ==========================
  //
  
  // this would be run by typing "grunt pub"
  grunt.registerTask('default', ['clean:build', 'copy', 'concat', 'cssmin', 'uglify', 'htmlmin', 'clean:remainingFiles']);
  
  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['spell', 'jshint', 'qunit']);

};