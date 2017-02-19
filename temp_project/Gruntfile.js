module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/tableController.js'],
        dest: 'build/js/script.js',
      },
      css: {
        src: ['css/1.css'],
        dest: 'build/css/styles.css',
      },
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
};