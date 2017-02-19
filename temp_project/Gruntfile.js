module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: ['js/tableController.js'],
        dest: 'build/js/script.js'
      },
      css: {
        src: ['css/1.css'],
        dest: 'build/css/styles.css'
      }
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js']
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['concat:css']
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'specs/*.js', 'js/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    exec: {
      remove_logs: {
        command: 'rm -f *.log',
        stdout: false,
        stderr: false
      },
      list_files: {
        cmd: 'ls -l **'
      },
      server: {
        cmd: 'python -m SimpleHTTPServer'
      },
      mocha: {
        cmd: 'mocha ./specs/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('test:integration', function() {
    grunt.task.run([
      'default',
      'exec:mocha'
    ]);
  });
};