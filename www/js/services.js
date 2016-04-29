angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('AuthService', function($q, $http, $rootScope, $ionicLoading, ApiEndpoint){
	return {
		login : function($email, $password) {
			var data = JSON.stringify({
					email: $email,
					password: $password
				});
			
			
			$ionicLoading.show();

	        $http.get(ApiEndpoint.url, data)
	        	.then(function(response){
			    	if(response.data.token) {
			    		$rootScope.token = response.data.token;
			    	}
			    	$ionicLoading.hide();
	        	},function(){
	        		$ionicLoading.hide();
	        	});
		}
	}
});

