module.exports = function(grunt) {
  grunt.initConfig({
    concat : {
      options: {
        separator: '\n\n//---------------------------\n',
        banner: '\n\n//---------------------------\n'
      },
      dist : {
        src: ['src/client/scripts/*.js'],
        dest: 'dist/development/js/script.js'
      },
      prod : {
        src: ['src/client/scripts/*.js'],
        dest: 'dist/production/js/script.js'
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
  }); // initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['concat', 'sass', 'connect', 'watch']);
}; // Wrapper function
