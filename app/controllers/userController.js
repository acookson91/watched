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
    }]);
