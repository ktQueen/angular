module.exports = function(grunt) {
	// 构建任务配置
	grunt
		.initConfig({
			// 读取package.json的内容，形成个json数据
			pkg : grunt.file.readJSON('package.json'),
			//concat插件的配置信息
			concat: {
				options:{
					stripBanners:true, //合并时允许输出头部信息
					banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				},
				cssConcat:{
					src:['src/css/common/reset.css','src/css/common/public.css','src/css/common/header.css','src/css/common/footer.css','src/css/index.css'],
					dest:'src/concat/css/index.css' //dest 是目的地输出
				},
				jsConcat:{
					src:['src/js/common/header.js','src/js/common/footer.js','src/js/index.js'],
					dest:'src/concat/js/index.js'
				}
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
						cwd : 'src/concat/js',
						src : '*.js',
						//src: ['**/*.js', '!**/*.min.js'],  //不包含某个js,某个文件夹下的js
						dest : 'dest/js/',
						rename : function(dest, src) {
							var folder = src.substring(0, src.lastIndexOf('/'));
							var filename = src.substring(src.lastIndexOf('/'), src.length);
							// var filename=src;
							filename = filename.substring(0, filename.lastIndexOf('.'));
							var fileresult = dest + folder + filename+ '.min.js';
							grunt.log.writeln("现处理文件：" + src + "  处理后文件："+ fileresult);
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
						cwd : 'src/concat/css/',
						src : '*.css',//压缩是要压缩合并了的
						dest : 'dest/css/',//dest 是目的地输出
						rename : function(dest, src) {
							var folder = src.substring(0, src.lastIndexOf('/'));
							var filename = src.substring(src.lastIndexOf('/'), src.length);
							// var filename=src;
							filename = filename.substring(0, filename.lastIndexOf('.'));
							var fileresult = dest + folder + filename+ '.min.css';
							grunt.log.writeln("现处理文件：" + src + "  处理后文件："+ fileresult);
							return fileresult;
							// return filename + '.min.js';
						}
					} ]
				}
			},
			jshint:{
				options:{
					jshintrc:'.jshint'
				},
				build:['Gruntfile.js','src/js/*js']
			},

			csslint:{
				options:{
					csslintrc:'.csslint'
				},
				build:['src/css/*.css']

			},
			//watch自动化
			watch:{
				build:{
					files:['src/js/*.js','src/css/*.css'],
						tasks:['jshint','csslint','concat','cssmin','uglify'],
						options:{spawn:false}
				}
			}
		});
	// 加载指定插件任务
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// 默认执行的任务
	grunt.registerInitTask('default',['jshint','csslint','concat','cssmin','uglify','watch']);//先进行语法检查，如果没有问题，再合并，再压缩
};