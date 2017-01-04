var app = angular.module('medapp', ['duScroll', 'ngAnimate']);
app.controller("homeHeaderCtrl", ["$scope", "$window", function($scope, $window){
	$scope.style = {
		"border-width" : "0px 0px " + document.body.clientHeight / 2 + "px " + document.body.clientWidth +  "px"
	}
	angular.element($window).on("resize", function(){
		$scope.style = {
			"border-width" : "0px 0px " + document.body.clientHeight / 2 + "px " + document.body.clientWidth + "px"
		}
		$scope.$digest();
	});	
}]);
app.controller("headerCtrl", ["$scope", function($scope){
	$scope.isShowSidebar = true;
	$scope.toggleSidebar = function(){
		console.log("HEY");
		$scope.isShowSidebar = !$scope.isShowSidebar;
	} 
}]);
