# RECIPETAP
![Finished project image goes here!]()
<hr />

## About
RecipeTap is a small, but surely growing recipe website. It is an easy website to use, as you can simply login to parse though plently of recipes that is available for you. You can create, delete and update your own recipe as well. If you also want to support other recipe creaters, you can comment on other people's recipe ideas. The app leans a little more toward social media than it does for cooking in a lot of spots. Over all, the application has a clean and simple user interface, with that said, we hope this will be your new faviote spot to get INSPIRED and COOK!

# Technologies
<hr />

## MERN Stack
React.js - A Frontend JavaScript library
Express - Backend web framework
MongoDb - Database
Node.js - JavaScript runtime

 ## NPM Modules

axios, bootstrap, dotenv, react, react-bootstrap react-dom react-router-dom react-scripts


# Getting Started
<hr />

## Prerequisites
- npm
`npm intall npm@latest -g`
- git tool 
the git tool is used to set up an environment to excute `git` commands, download:  [download and install the git tool.](https://git-scm.com/downloads)

## Installation 

1. git clone https://github.com/mmengi18/Recipe-App-Client.git 
1.  make sure that you are in the root dirctory of the project, use "pwd" pr "cd" for windows 
1. cd RepoName -  `Recipe-App-Client`
1. Install dependencies with `npm install`.
1.  Run the development server with `npm start`.

## API
This is the Client side/Front end of the application.
- Here is the link for the API/Back end:
[github.com/API](https://github.com/mmengi18/Recipe-App-Api)

# Project Plan 
<hr />

## User Stories

    -As an unregistered user,
        - I would like to view all recipes. 
        - I would like to view each recipes individually 
            - I would like to read a description about the recipe
            - I would like to read comments about the recipe
        - I would like to sign up with unique email username, and password. 
        - I would like to sign in with email and password.
    -As a rejesterd but unauthenticated user,
        - I would like to view all the recipes
        - I would like to view each recipes inidvidually
            - I would like to create update and delete comment on someone else's recipe
            - I would like to read desciption about the recipe
        - I would like to create a recipe of my own
            - I would like to update and delete my own recipe
            - I would like to create, update and delete my own comment
        -As a signed in user, I would like to change password.
        -As a signed in user, I would like to sign out.
    - As a rejesterd and authenticated user, 
        - I would like to create, update and delete my own recipe
        - I would like to create, update and delete comment of my own
        - I would like to update and delete comment that i made on someone else's post
        - As a signed in user, i would like to change password. 
        - As a signed in user, I would like to sign out.
    
    ### Stretch
        -be able to search recipes by category and type
        -be able to bookmark favorite recipe
       

## FrontEnd Views

### User Views

| Route | Description |
| ----- | ----------- |
| /sign-up | allows users to create a new account |
| /sign-in | allows users to sign into their account |
| /sign-out | allows users to sign out of their account |
| /change-password | allows users to change their password |

### Recipe Views

| Route | Description |
| ----- | ----------- |
| /     | recipes index  |
| /recipes/:id | recipe show page |
| /createrecipes| new recipe page |

Users will be able to delete and update recipes via the show page.
Users will be able to delete and update comment via the show page.  
### Comment Views

| Route | Description |
| ----- | ----------- |
| /add comment | comment modal |

## Wireframes

![WIREFRAME](planning/images/image%203.png)
![WIREFRAME](planning/images/image%202.png)
![WIREFRAME](planning/images/image%201.png)

## Technology Used Links

React - [reactjs.com](https://reactjs.org/)
Express JS - [expressjs.com](https://reactjs.org/)
Node JS - [nodejs.com](https://nodejs.org/en/)
Mongoose JS - [mongoosejs](https://mongoosejs.com/)
MongoDB - [mongodb](https://www.mongodb.com/)
NPM JS - [npmjs](https://www.npmjs.com/)



