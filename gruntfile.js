module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: 'css/*.css',
				dest: 'css/final.min.css'
			}
		}
	});
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat']);
}