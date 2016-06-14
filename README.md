# Watched 

**Task to a game that allows players to send video between one another.**

## About Watched

The point of watched is to make a application that stops you ignoring videos your friends send you and stopping yourself not watching video someone sends you.

The Watched app is going to look at the youtube events sent. Once you add a video for the other player to watch only when they have watched more than 10 seconds of the video, do they see the new video input. 


## Progress

Each link goes to a blog post

[Day one - MVP and project set up](https://andrewcookson.wordpress.com/2016/05/17/app-one-watched-day-1/)

<img src="https://andrewcookson.files.wordpress.com/2016/05/screen-shot-2016-05-17-at-19-29-35.png"  width="530" >


[Day Two - Adding youtube video](https://andrewcookson.wordpress.com/2016/05/18/slow-start-watched-day-2/)


<img src="https://andrewcookson.files.wordpress.com/2016/05/screen-shot-2016-05-18-at-11-45-46.png?w=1000"  width="530" >


[Day Three - MVP done](https://andrewcookson.wordpress.com/2016/05/19/mvp-done-watched-day-3/)

<img src="https://andrewcookson.files.wordpress.com/2016/05/videoexample1.gif?w=500"  width="530" >

[Day Four - Going back to Square one](https://andrewcookson.wordpress.com/2016/05/25/users-set-up-watched-day-4/)

[Day Five - Adding Users and API versions](https://andrewcookson.wordpress.com/2016/05/26/game-backend-watched-day-5-5/
)

<img src="https://andrewcookson.files.wordpress.com/2016/05/screen-shot-2016-05-26-at-11-58-52.png?w=1000"  width="530" >


## Installation

The app is currently a decoupled app with the backend found [here](https://github.com/acookson91/watched-backend). Once complete I'll set up this repo on heroku! 

## Technologies used

So far I've used AngularJS with protractor and Karma testing for this frontend of this app and Rails API to provide game and user information.

## Features

Users can now put in any format of youtube video and it will display the embedded video on the page. Once the other user has clicked play on the video the youtube event will trigger a new video input field to show after 10 seconds to make sure the user has watched the video.

## Design approach and Challenges

My approach was to keep the application as simple as possible to get an MVP up and running as quick as I could. The first issue that I ran into was strict Contextual Escaping. By adding this it allowed angular to load the video with no secuirty issues.

Now videos could be added if the user added there own embedded links, which most would not. I started to use Regex to amend the link but discovered a bower package that changed the link on submisson. 

Next the users had to be added. Using ng-auth I was able to create a secure communcation between both the rails and angularjs app. Half way through this I had to change my computer which mean my Bower componants were slightly different causing a few issues.
