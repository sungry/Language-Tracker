module.exports = (grunt) ->
  require('load-grunt-tasks') grunt

  require('time-grunt') grunt

  grunt.initConfig

    watch:
      jade:
        files: ['public/app/**/*.jade', 'public/index.jade']
        tasks: ['newer:jade:compile']
      coffee:
        files: ['public/app/**/*.coffee']
        tasks: ['newer:coffee:dist']

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

  grunt.registerTask 'default', [
    'clean'
    'copy'
    'coffee'
    'jade:compile'
    'watch'
  ]