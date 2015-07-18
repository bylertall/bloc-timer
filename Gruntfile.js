module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		watch: {
			files: [
				'app/stylesheets/app.css',
				'app/javascripts/app.js'
			],
			tasks: ['build']
		},
		uglify: {
			my_target: {
			  files: {
			    'public/javascripts/app.min.js': ['app/javascripts/app.js']
			  }
			}
		},
		cssmin: {
			compress: {
			    files: {
			      'public/stylesheets/app.min.css': [
			      	'app/stylesheets/normalize.css',
			      	'app/stylesheets/app.css'
			      ]
			    }
			  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('build', [
		'uglify', 
		'cssmin'
	]);
	grunt.event.on('watch', function(action, filepath) {
	  grunt.log.writeln(filepath + ' has ' + action);
	});
}