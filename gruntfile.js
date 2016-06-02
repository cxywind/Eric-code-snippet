module.exports = function(grunt) { //Wrapper

    
    // 给grunt添加些设置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // 导入package.json的配置

        uglify: {
            options: {
                banner: '/*Author: Eric Chen*/' // 版权信息
            },
            build: {
                src: 'source/js/fitbox.js', //要压缩的源文件，我们也可以用*表示通配，比如'src/*.js'
                dest: 'dist/js/fitbox.min.js' //压缩后输出的位置
            }
        },

        less:{
            development: {
                options:{
                    banner:'/*Author: Eric Chen*/'
                },
                files:{
                    'dist/css/fitbox.css':'source/less/fitbox.less'
                }
            }
        },


        'html-inspector': {
            options: {
                parameters: 'noglobals=true'
            },
            all: {
                src: ['dist/*.html']
            }
        },

        watch:{   
            js:{
                files:[
                'source/js/fitbox.js'  //要监控的js
                ],
                tasks:['uglify']
            },
            script:{
                files:[
                'source/less/fitbox.less'
                ],
                tasks:['less']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');     // 载入 "uglify" 插件任务
    grunt.loadNpmTasks('grunt-contrib-watch');  //载入watch插件人物
    grunt.loadNpmTasks('grunt-contrib-less');  //载入watch插件人物
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-html-inspector'); //HTML检查

    grunt.registerTask('default', ['watch','html-inspector']);     // 定义默认需要执行的任务
};