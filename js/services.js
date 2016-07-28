var app = angular.module('detroitApp');


app.factory('dogService', function($http,data){
	$http({
	  method: 'GET',
	  url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
	}).then(function successCallback(response) {
	    console.log(response);
	  }, function errorCallback(response) {
	    	    console.log("nope");

	  });
}