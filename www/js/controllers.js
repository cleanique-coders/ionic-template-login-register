angular.module('app.controllers', [])
  
.controller('profileCtrl', function($scope, $ionicSideMenuDelegate) {
	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};
})
   
.controller('loginCtrl', function($scope, $rootScope, $state, AuthService) {

	ionic.Platform.ready(function(){

  	});

  	$scope.login = function() {
  		
  		console.info('Authentication...');
  		AuthService.login($scope.email,$scope.password);
  		
  		setTimeout(function() {
			if($scope.token) {
				console.info('Successfully logged in...');
				$state.go('profile');
			}
		}, 2000);

  		
  	}
	
})
   
.controller('registerCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})

.controller('splashCtrl', function($scope, $state) {
	setTimeout(function() {
		$state.go('login');
	}, 2000);
})

.controller('tilesCtrl', function($scope) {

})
 