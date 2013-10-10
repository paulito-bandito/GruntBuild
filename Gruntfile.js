module.exports = function(grunt) {

  // load external libs
  grunt.loadNpmTasks('grunt-spell');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  
  // configure the tasks that grunt will run. 
  grunt.initConfig({
    
    // make a local variable to reference the package.json object. 
    pkg: grunt.file.readJSON('package.json'),

    /**
      CLEAN TASK
    */
    clean: {
      build: ['build']
    },

    /**
      CONCAT THE CSS FILES TOGETHER
    */
    concat: {
      dist: {
        src: ['src/css/bp.css', 'src/css/main.css', 'src/css/helper.css'],
        dest: 'build/css/style.css'
      }
    },

    /**
      COPY CSS AND JS FILES FROM SRC TO BUILD
    */
    copy: {
      dist: {
        files: {
          "build/index.html": "src/index.html",
          "build/css/style.css": "src/css/style.css",
          "build/css/reset.css": "src/css/reset.css",
          "build/css/normalize.css": "src/css/normalize.css",
          "build/js/script.js": "src/js/script.js"
        }
      }
    },

    /**
      UGLIFY: Minify the javascript files. 
    */
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },

    /**
      CHECK FOR SPELLING
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
      files: ['src/css/*.css', 'js/*.js'],
      tasks: 'concat min'
    }
  });

  grunt.registerTask('default', ['clean', 'concat', 'uglify'])
  {
     //grunt.log.write('Running Default task...').ok();
  };
  grunt.registerTask('pub', ['clean', 'concat', 'uglify', 'copy'])
  {
      //grunt.log.write('Running Publish task...').ok();
  };

};