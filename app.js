var app = angular.module('UiRouting', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/header/home');
    $stateProvider
 	.state('header', {
	    url: '/header',
	    abstract: true,
	    templateUrl: 'pages/header.html'
    })
	.state('header.home', {
	    url: '/home',
	    views: {
	      'container': {
	        templateUrl: 'pages/home.html'
	      }
	    }
	})
	.state('header.about', {
	    url: '/about',
	    views: {
	      'container': {
	        templateUrl: 'pages/about.html'
	      }
	    }
	})
	.state('header.contact', {
	    url: '/contact',
	    views: {
	      'container': {
	        templateUrl: 'pages/contact.html'
	      }
	    }
	});
});
