module.exports = function (grunt) {
	/*jshint evil:true */

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-bg-shell');
	grunt.loadNpmTasks('grunt-curl');
	grunt.loadNpmTasks('grunt-zip');

	grunt.registerTask('default', ['requirejs', 'copy']);

	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' + ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;\n' + ' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n',
		requirejs: {
			common: {
				options: {
					baseUrl: "modules/",
					name: "common/common.module",
					mainConfigFile: "modules/common/main.js",
					out: "modules/common.rel/main.js",
					optimize: "none",
					buildCSS: false,
					exclude: ['common/vendor/require-css-0.1.0/normalize']
				}
			},
			newmodule: {
				options: {
					baseUrl: "modules/",
					name: "newmodule/newmodule.module",
					mainConfigFile: "modules/newmodule/main.js",
					out: "modules/newmodule.rel/main.js",
					optimize: "none",
					buildCSS: false,

					exclude: ['text', 'common/vendor/require-css-0.1.0/normalize', 'common/vendor/require-css-0.1.0/css'],
					"paths": {
						'jquery': 'empty:',
						'common/common.module': 'empty:'
					}
				}
			}
		},
		copy: {
			common: {
				expand: true,
				cwd: 'modules/common/',
				src: ['vendor/**', 'template.html', 'jquery-2.0.3.min.map'],
				dest: 'modules/common.rel/'
			},
			newmodule: {
				expand: true,
				cwd: 'modules/newmodule/',
				src: ['vendor/**', 'template.html'],
				dest: 'modules/newmodule.rel/'
			}
		},
		connect: {
			server: {
				options: {
					port: 9000,
					keepalive: true
				}
			}
		}
	};

	grunt.initConfig(gruntConfig);
};