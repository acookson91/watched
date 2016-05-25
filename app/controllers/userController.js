watchedApp.controller('UserController',['$scope','$auth', function($scope, $auth){

  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {
        console.log('In');
      })
      .catch(function(resp) {
        console.log('Out');
      });
  };

  $scope.handleLoginBtnClick = function() {
   $auth.submitLogin($scope.loginForm)
     .then(function(resp) {
       // handle success response
     })
     .catch(function(resp) {
       // handle error response
     });
  };

  $scope.handleSignOutBtnClick = function() {
    $auth.signOut()
    .then(function(resp) {
      // handle success response
    })
    .catch(function(resp) {
      // handle error response
    });
  };

}]);
