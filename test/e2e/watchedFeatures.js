describe('watchedApp', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('watched');
  });

  it('shows video link', function(){
    browser.get('/');
    $('#video1-input').sendKeys('youTube');
    $('#add-video').click();
    expect($('#video1').isDisplayed()).toBeTruthy();
  });

  it('adds correct video link', function(){
    browser.get('/');
    $('#video1-input').sendKeys('youTube');
    $('#add-video').click();
    expect($('#youtube').getAttribute('src')).toContain('youTube');
  });

  // it('Shows input once video playing', function(){
  //   browser.get('/');
  //   $('#video1-input').sendKeys('youTube');
  //   $('#add-video').click();
  //   $('#watched-video').click();
  //   expect($('#video1').isPresent()).toBe(false);
  // });

  it('allows you to save video', function(){
    browser.get('/');
    $('#video1-input').sendKeys('youTube');
    $('#add-video').click();
    $('#save-video').click();
    expect($('#save-video').getText()).toBe('SAVED');
  });

  it('hides input once the video has been added', function(){
    browser.get('/');
    $('#video1-input').sendKeys('youTube');
    $('#add-video').click();
    expect($('#add-video-form').isPresent()).toBe(false);
  });

  it('allows users to signup', function(){
    browser.get('/');
    $('#signup').click();
    $('#email').sendKeys('test@test.com');
    $('#password').sendKeys('password123');
    $('#password-con').sendKeys('password123');
    $('button').click();
    expect($('h1').getText()).toBe('Welcome');
  })

  xit('shows input once the video has started playing', function(){
    browser.get('/');
    $('#video1-input').sendKeys('https://www.youtube.com/watch?v=oyEuk8j8imI');
    $('#add-video').click();
    $('.ytp-large-play-button.ytp-button').click();
    browser.wait(function() {
      expect($('#add-video-form').isPresent()).toBe(true);
    }, 8000);
  });
});
