describe('MainController', function(){
  beforeEach(module('watchedApp'));
  var video = 'youtube';
  var ctrl;
  var self = this;

  beforeEach(inject(function($controller, $rootScope ) {
    scope = $rootScope.$new();
    ctrl = $controller('MainController', {$scope: scope});
  }));

  it('adds a new video link', function(){
    scope.addPost(video);
    expect(scope.posts).toBe(video);
  });

  it('clears old video link when video watched', function(){
    scope.addPost(video);
    scope.watchedVideo();
    expect(scope.posts).toBe('');
  });

  xit('add video to array', function(){
    scope.addPost(video);
    scope.saveVideo();
    expect(self.saved).toContain(video);
  });
});
