module.exports = function(grunt) {
  grunt.initConfig({
    concat : {
      options: {
        separator: '\n\n//---------------------------\n',
        banner: '\n\n//---------------------------\n'
      },
      dist : {
        src: ['src/client/scripts/*.js'],
        dest: 'dist/development/js/app.js'
      }
    }, // concat

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          src: 'src/client/styles/style.scss',
          dest: 'dist/development/css/style.css'
        }]
      }
    }, // sass

    watch: {
      options: {
        spawn: false,
        livereload: true,
      },
      scripts: {
        files: ['src/client/styles/*.scss'],
        tasks: ['concat', 'sass']
      }
    }, // watch

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: '',
          open: {
            target: 'http://localhost:3000'
          },
          livereload: true
        }
      }
    }, // connect

    browserify: {
      dist: {
        options: {
           transform: [['babelify', {presets: ['es2015', 'react']}]]
        },
        src: ['src/client/scripts/app.js'],
        dest: 'dist/development/js/app.js',
      }
    }, // browserify

  }); // initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['concat', 'sass', 'browserify', 'connect', 'watch']);
}; // Wrapper function
