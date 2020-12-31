
module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // store some paths
        cssDir: 'css',
        scssDir: 'css/src',


        // watch for changes and trigger compass, jshint, uglify and livereload
        watch: {
            css: {
                files: '<%= scssDir %>/*.scss',
                tasks: ['sass', 'autoprefixer'],
                options: {
                    livereload: true,
                },
            }
        },


        // we use the Sass
        sass: {
            dist: {
                options: {
                    // nested, compact, compressed, expanded
                    style: 'compressed'
                },
                files: {
                    '<%= scssDir %>/main-unprefixed.css': '<%= scssDir %>/main.scss'
                }
            }
        },


        // auto-prefix our css3 properties.
        autoprefixer: {
            files: {
                dest: '<%= cssDir %>/main.css',
                src: '<%= scssDir %>/main-unprefixed.css'
            }
        },


    });


    // register task
    grunt.registerTask('default', ['watch']);
};