module.exports = function(grunt) {
	// 构建任务配置
	grunt
		.initConfig({
			// 读取package.json的内容，形成个json数据
			pkg : grunt.file.readJSON('package.json'),
			jshint: {
//				options: {
//					'-W033': true
//				},
//				pre: ['src/test01.js', 'src/test02.js'],
//				after: ['dist/output.js']
			},
			// 合并js
			concat: {
				options: {
					separator: ';'
				},
				stripBanners:{

				},
				dist:
//				{
//					src: ['src/js/common/header.js', 'src/js/index.js', 'src/js/common/footer.js'],
//					dest: 'src/merge/js/index.js'
//				}
				{src: ['src/js/common/header.js', 'src/js/<%= basename %>.js', 'src/js/common/footer.js'], dest: 'src/merge/js/<%= basename %>.js'}
			},
			// 压缩js
			uglify : {
				// 文件头部输出信息
				options : {
					banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				my_target : {
					files : [ {
						expand : true,
						// 相对路径
						cwd : 'src/merge/js',
						src : '*.js',
						dest : 'dest/js',
						rename : function(dest, src) {
							var folder = src.substring(0, src
								.lastIndexOf('/'));
							var filename = src.substring(src
								.lastIndexOf('/'), src.length);
							// var filename=src;
							filename = filename.substring(0, filename
								.lastIndexOf('.'));
							var fileresult = dest + folder + filename
								+ '.min.js';
							grunt.log.writeln("现处理文件：" + src + "  处理后文件："
								+ fileresult);
							return fileresult;
							// return filename + '.min.js';
						}
					} ]
				}
			},
			// 压缩css
			cssmin : {
				// 文件头部输出信息
				options : {
					banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
					// 美化代码
					beautify : {
						// 中文ascii化，非常有用！防止中文乱码的神配置
						ascii_only : true
					}
				},
				my_target : {
					files : [ {
						expand : true,
						// 相对路径
						cwd : 'src/merge/css/',
						src : '*.css',
						dest : 'dest/css/',
						rename : function(dest, src) {
							var folder = src.substring(0, src
								.lastIndexOf('/'));
							var filename = src.substring(src
								.lastIndexOf('/'), src.length);
							// var filename=src;
							filename = filename.substring(0, filename
								.lastIndexOf('.'));
							var fileresult = dest + folder + filename
								+ '.min.css';
							grunt.log.writeln("现处理文件：" + src + "  处理后文件："
								+ fileresult);
							return fileresult;
							// return filename + '.min.js';
						}
					} ]
				}
			}
		});
	// 加载指定插件任务
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// 默认执行的任务
	grunt.registerTask('default', [ 'concat','uglify', 'cssmin','jshint']);
};