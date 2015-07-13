module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		dirs: {
		    srclibjs: 'assets/lib/js',
		    srclocaljs: 'assets/local/js',
		    destjs: 'dist/js',
		},
		jshint: {
		    all: ['Gruntfile.js', 'assets/local/js/*.js', 'test/**/*.js']
		},
		watch: {
			options:{
				livereload:true
			},
		  scripts: {
		    files: 'assets/local/js/*.js',
		    tasks: ['jshint'],
		    options: {
		      interrupt: true,
		      reload:true
		    },
		  },
		   "grunt" : {
	            files: ['Gruntfile.js'],
	            options: { reload: true }
	        }
		  css: {
		    files: 'assets/local/css/*.css'
		  },
		},
		concat:{
			options:{
				seperator:";\n\n;"
			},
			lib_and_app:{
				files:{					
					"dist/lib/js/lib.js":['assets/lib/js/jquery-1.10.2.js','assets/lib/js/bootstrap.min.js','assets/lib/js/moment.min.js'],
					"dist/lib/js/local.js":['assets/local/js/services.js','assets/local/js/supply.js','assets/local/js/app.js']
				}
				
			}
		},
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'assets/local/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/local/css',
		      ext: '.min.css'
		    },
		    {
		      expand: true,
		      cwd: 'assets/lib/css',
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
					"dist/lib/js/lib.min.js":"dist/lib/js/lib.js",
					"dist/local/js/local.min.js":"dist/local/js/local.js"
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['jshint','cssmin','concat','uglify']);
}