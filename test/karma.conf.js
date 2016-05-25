module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
    'app/bower_components/angular/angular.js',
    'app/node_modules/angular-youtube-embed/src/angular-youtube-embed.js',
     'app/bower_components/angular-mocks/angular-mocks.js',
     'app/bower_components/angular-route/angular-route.js',
     'app/js/**/*.js',
     'test/unit/**/*.js',
     'app/app.js',
     'app/controllers/mainController.js'
    ],

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,


  });
};
