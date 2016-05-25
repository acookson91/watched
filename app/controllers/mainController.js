watchedApp.controller('MainController', ['$scope','$timeout', function($scope, $timeout){

  $scope.posts = '';
  $scope.save = 'SAVE';
  $scope.videoNeeded = true;
  var saved = [];

  $scope.addPost = function(video) {
    $scope.posts = video;
    $scope.showVideo = true;
    $scope.videoNeeded = false;
  };

  $scope.$on('youtube.player.playing', function ($event, player) {
    $timeout(function(){
      $scope.watchedVideo();
    }, 7000);
  });

  $scope.watchedVideo = function() {
    $scope.videoNeeded = true;
    $scope.posts = '';
  };

  $scope.saveVideo = function() {
    saved.push($scope.posts);
    $scope.save = 'SAVED';
  };

}]);
