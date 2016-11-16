/**
 * Created by Ramkumar on 3/3/2016.
 */
require.config({
    baseUrl: 'js',
    paths: {
        'angular': '../../bower_components/angular/angular.min',
        'jquery': '../../bower_components/jquery/dist/jquery.min',
        'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min',
        'ui.router': '../../bower_components/angular-ui-router/release/angular-ui-router.min',
        'ngResource': '../../bower_components/angular-resource/angular-resource.min',
        'ngAnimate': '../../bower_components/angular-animate/angular-animate.min',
        'uiRouterAnimation': '../../bower_components/angular-ui-router-anim-in-out/anim-in-out',
        'd3': '../../bower_components/d3/d3.min',
        'c3': '../../bower_components/c3/c3.min',
        'ngRadialGauge': '../../bower_components/ngRadialGauge/src/ng-radial-gauge-dir',
        'socket.io': '/socket.io/socket.io'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            export: 'bootstrap'
        },
        'ui.router': {
            deps: ['angular'],
            export: 'ui.router'
        },
        'ngResource': {
            deps: ['angular'],
            export: 'ngResource'
        },
        'ngAnimate': {
            deps: ['angular'],
            export: 'ngAnimate'
        },
        'uiRouterAnimation': {
            deps: ['angular', 'ngAnimate', 'ui.router'],
            export: 'uiRouterAnimation'
        },
        'c3': {
            deps: ['d3'],
            export: 'c3'
        },
        'ngRadialGauge': {
            deps: ['angular', 'd3'],
            export: 'ngRadialGauge'
        },
        'app': {
            deps: ['angular', 'bootstrap'],
            export: 'app'
        }
    }
});

/* Angular Application Bootstrap */

require(['app'],
    function () {
        var body = window.document;

        angular.element(body).ready(
            function () {
                var mainModule = ['com.gs.app'];

                angular.bootstrap(body, mainModule);
            });
    });