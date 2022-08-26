# Board Game Review Front-End Project

This is a front-end API repo for a board games rating and discussion website built with React. The website allows a user to view a list of reviews, sort and filter reviews, upvote them, and add/delete comments. It also features error-handling for form submission and invalid slugs/endpoints.

A live version of the website is hosted at:\
[https://6308e778b4acbe39868d3f26--board-games-reviews-fe-project.netlify.app]

The back-end API can be accessed here:\
Repo: [https://github.com/callumu21/Board-Games-Reviews-BE]\
Hosted at: [https://board-games-backend-project.herokuapp.com/api]

## Current routes

```
/                               Home
/reviews                        All reviews
/reviews:review_id              Review with comments
/reviews/category/:category     Reviews filtered by category
```

## User Stories

As a user, I am able to:

- view a list of all reviews
- sort the list by number of votes, comments, or date
- order the list in ascending or descending order
- filter reviews by category
- view an individual review
- view a list of comments for a single review
- vote on a review and see it immediately change
- post a new comment as a default user
- delete my own comment

Error-handling:

- Users receive a 404 page for non-existent endpoints/slugs
- Users cannot post a comment less than 5 characters
- Users receive feedback if an upvote was not processed
- Users cannot accidentally submit the same comment more than once
- Users cannot accidentally try to delete the same comment

## Future Plans

- Implement a mock login screen for users
- Allow users to add a new review
- Allow users to delete a review
- Allow users to upvote comments
- Add pagination of reviews so more than 10 can be seen
- Add custom page limit so that more than 10 can be seen at once
- Allow users to edit their own reviews
- Allow users to edit their own comments

## Specifications and running locally

Tested on Node version 18.5.0

To run locally, clone this entire repo into a local folder, run 'npm install' in the terminal to install all dependencies and then type 'npm start' to start the app in a browser.

```
$ git clone https://github.com/callumu21/Board-Games-Reviews-FE
$ cd Board-Games-Reviews-FE
$ npm install
$ npm start
```
