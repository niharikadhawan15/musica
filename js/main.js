
//this part of the code has been provided the ngRoute to make the routing available in the app between various pages
var musicaApp = angular.module('musicaApp',['ngRoute']);

//this part of the code contains the config part with the url that will direct to their specified page and their controller
musicaApp.config(function ($routeProvider) {
  $routeProvider
  //this part is for login
  .when('/',{
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  //this part is for main
  .when('/home',{
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
    //this part is for main1
  .when('/main1',{
    templateUrl: 'pages/main1.html',
    controller: 'main1Controller'
  })
  //this part is for about
  .when('/about',{
    templateUrl: 'pages/about.html',
    controller: 'aboutController'
  })
    //this part is for drumkit
  .when('/drumkit', {
    templateUrl: 'drumkit.html',
    controller: 'drumController'
  })
    //this part is for piano
  .when('/piano', {
    templateUrl: 'piano.html',
    controller: 'pianoController'
  })
    //this part is for mood
  .when('/mood',{
  templateUrl: 'mood/mood.html',
  controller: 'moodController'
})
  //this part is for signup
.when('/signup',{
templateUrl: 'pages/signup.html',
controller: 'signupController'
})
})

//this part of our code act as login controller
musicaApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home');
	}
})


//this part of our code act as login controller
musicaApp.controller('signupController',function($scope,$location) {
	$scope.goTomain1 = function() {
		//console.log('Do Something')
		$location.url('main1');
	}
})
//this part of our code act as about controller
musicaApp.controller('aboutController',function($scope,$location) {
  $scope.goToAbout = function() {
    // console.log('Do Something')
    $location.url('about')
  }
})
