angular.module('csgo_bombtimer')
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
  		.state('tab', {
           	url: '/tab',
           	abstract: true,
        	templateUrl: 'templates/tabs.html'
        })
    	.state('tab.countdown', {
            url: '/countdown',
            views: {
            	'tab-countdown': {
            		templateUrl: 'templates/countdown.html',
        			controller : "CountdownCtrl"
            	}
            }
        })
        .state('tab.barcode', {
            url: '/barcode',
            views: {
            	'tab-barcode': {
            		templateUrl: 'templates/barcode.html',
        			controller : "BarcodeCtrl"
            	}
            }	
        });

    $urlRouterProvider.otherwise('/tab/barcode');
});