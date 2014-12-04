module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['**/*.{scss,sass}'],
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                files: {
                    'public/styles/main.css': 'public/styles/main.scss',
                    'public/styles/login.css': 'public/styles/login.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass','watch']);
};
