module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-watch-nospawn');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-clean');

    var appJsFiles = [
        'app/**/*.module.js',
        'app/**/*.js'
    ];

    var ngTemplates = [
        'app/**/*.tpl.html'
    ];

    var vendorMinifiedJsFiles = [
        'vendor/jquery/dist/jquery.min.js',
        'vendor/angular/angular.min.js',
        'vendor/bootstrap/dist/js/bootstrap.min.js',
        'vendor/lodash/dist/lodash.min.js'
    ];

    var vendorMinifiedCssFiles = [
        'vendor/bootstrap/dist/css/bootstrap.min.css'
    ];

    var angularTemplateCache = 'build/app/template-cache.js';

    grunt.initConfig({
        ngtemplates: {
            fiscopoly: { // "fiscopoly" matches the name of the angular module defined in app.js
                src: ngTemplates,
                dest: angularTemplateCache
            }
        },
        express: {
            mock: {
                options: {
                    hostname: 'localhost',
                    port: 9000,
                    bases: 'build',
                    server: 'api/mock.js'
                }
            },
            proxy: {
                options: {
                    hostname: 'localhost',
                    port: 9000,
                    bases: 'build',
                    server: 'api/proxy.js'
                }
            }
        },
        watch: {
            ngTplCache: {
                files: ['app/**/*.tpl.html'],
                tasks: ['ngtemplates', 'injector:build']
            },
            appJsFiles: {
                files: appJsFiles,
                tasks: ['copy:build', 'injector:build']
            },
            index: {
                files: 'app/index.html',
                tasks: ['copy:build', 'injector:build']
            }
        },
        copy: {
            build: {
                files: [
                    {expand: true, src: appJsFiles, dest: 'build'},
                    {expand: true, src: vendorMinifiedJsFiles, dest: 'build'},
                    {expand: true, src: vendorMinifiedCssFiles, dest: 'build'},
                    {expand: true, flatten: true, src: 'app/index.html', dest: 'build'}
                ]
            }
        },
        injector: {
            options: {
                template: 'build/index.html',
                ignorePath: 'build'
            },
            build: {
                files: {
                    'build/index.html': vendorMinifiedJsFiles.concat(appJsFiles).concat(vendorMinifiedCssFiles).concat([angularTemplateCache])
                }
            }
        },
        clean: {
            build: {
                src: ['build']
            }
        }
    });

    grunt.registerTask('dev', ['clean:build', 'copy:build', 'ngtemplates', 'injector:build', 'express:mock', 'watch']);
    grunt.registerTask('proxy', ['express:proxy', 'watch']);
};