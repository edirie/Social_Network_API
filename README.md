# Social Network API

## Purpose of application
To build an API for a social network web application.

## Installation
Run following commands to install required packages:

* npm init 
* npm i express 
* npm i mongoose
* npm start/ node server.js - Run this command to start an application execution.

## API routes
* User API routes  
  get - api/users - to get all users  
  get - api/users/id - to get user of specific id  
  Post - api/users - Create new user  
  Put - api/users/id - to update user  
  Delete - api/users/id - to delete user by id  

* Thought APT routes  
  get - api/thoughts - to get all thoughts  
  get - api/thoughts/id - to get thought of specific id  
  Post - api/thoughts - Create new thought  
  Put - api/thoughts/id - to update thought  
  Delete - api/thoughts/id - to delete thought by id  

* Friend API routes  
  Post - /api/users/:userId/friends/:friendId - to add a new friend to a user's friend list  
  Delete - /api/users/:userId/friends/:friendId - to remove a friend from a user's friend list.  

* Reactions API routes  
  Post - /api/thoughts/:thoughtId/reactions - to create a reaction stored in a single thought's reactions array field  
  Delete - /api/thoughts/:thoughtId/reactions/:reactionId - to pull and remove a reaction by the reaction's reactionId value  



## Build with:
* node js
* mongodb
* express js
* Javascript
* Mongoose ODM
