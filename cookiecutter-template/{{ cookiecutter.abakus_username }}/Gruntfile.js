module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      vendor: {
        src: [
          'vendor/phaser/build/phaser.min.js',
        ],
        dest: 'dist/vendor.js'
      },
      game: {
        src: [
          'src/*.js',
        ],
        dest: 'dist/game.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.game.dest %>']
        }
      }
    },
    htmlbuild: {
      dist: {
        src: 'index.html',
        dest: 'dist/{{ cookiecutter.abakus_username }}.html',
        options: {
          styles: {
            main: [
              'css/*.css'
            ],
          },
          scripts: {
            minified: ['<%= concat.vendor.dest %>', 'dist/<%= pkg.name %>.min.js']
          }
        },
      }
    },
    watch: {
      files: ['<%= concat.game.src %>'],
      tasks: ['concat', 'uglify', 'htmlbuild']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('default', ['concat', 'uglify', 'htmlbuild']);
};
