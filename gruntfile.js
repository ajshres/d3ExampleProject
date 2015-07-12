module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		dirs: {
		    srclibjs: 'assets/lib/js',
		    srclocaljs: 'assets/local/js',
		    destjs: 'dist/js',
		},
		concat:{
			options:{
				seperator:";\n\n;"
			},
			lib_and_app:{
				files:{					
					"dist/js/lib.js":['assets/lib/js/jquery-1.10.2.js','assets/lib/js/bootstrap.min.js','assets/lib/js/moment.min.js'],
					"dist/js/local.js":['assets/local/js/services.js','assets/local/js/supply.js','assets/local/js/app.js']
				}
				
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: ['assets/local/css'],
		      src: ['*.css', '!*.min.css'],
		      dest: 'release/css',
		      ext: '.min.css'
		    },
		    {
		      expand: true,
		      cwd: ['assets/local/css'],
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/lib/css',
		      ext: '.min.css'
		    }]
		  }
		},
		uglify:{
			my_target:{
				options:{
					mangle:false
				},
				files:{
					"dist/js/lib.min.js":"dist/js/lib.js",
					"dist/js/local.min.js":"dist/js/local.js"
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['concat','uglify']);
}