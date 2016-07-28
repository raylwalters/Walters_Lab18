var app = angular.module('detroitApp');

app.controller('catCtrl', function($scope,$http){
	$http({
	  method: 'GET',
	  url: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
	}).then(function successCallback(response) {
		// console.log(response);
		$scope.cats= response.data.data;
		// var pics = [];
		// pics.push($scope.cats);
		console.log(cats);
		// console.log($scope.cats);
		$scope.cats.forEach(function(pic){
			$scope.kitty = pic.images.fixed_height.url;
			console.log($scope.kitty);
		});
		

		
    		
		
		// $scope.cats= response.data;
	  }), function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  };


});


