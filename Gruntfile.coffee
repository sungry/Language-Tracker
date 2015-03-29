module.exports = (grunt) ->

  grunt.initConfig
    clean:
      dist: 'dist'

    copy:
      dist:
        files: [
          expand: true
          cwd: 'public/'
          dest: 'dist'
          src: [
            'assets/images/**/*'
            'assets/styles/**/*'
            'lib/**/*'
          ]
        ]

    coffee:
      dist:
        expand: true
        cwd: 'public/'
        src: ['app/**/*.coffee']
        dest: 'dist'
        ext: '.js'
        extDot: 'last'

    jade:
      compile:
        options:
          data:
            pretty: true
            data:
              debug: false
        files: [
          expand: true
          cwd: 'public/'
          src: ['**/*.jade']
          dest: 'dist'
          ext: '.html'
        ]

  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-jade'

  grunt.registerTask 'default', [
    'clean'
    'copy'
    'coffee'
    'jade:compile'
  ]