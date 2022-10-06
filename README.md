# Project 18: NoSQL Challenge
## Social Network API
MongoDB is a popular choice for many social media networks due to its speed with large amounts of data and flexibility with unstructured data. The purpose of this project was to build an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The application comprises of Express.js for routing, MongoDB for the database, the Mongoose ODM, and Moment.js for timestamps.

![screenshot.png](/../main/assets/images/screenshot.png)

### Built With
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/docs/)
- [Express.js](https://expressjs.com/)
- [Moment.js](https://momentjs.com/)

## Installation
1. To install this application, `git clone` this repository, or download the `.zip` file in the dropdown after clicking the green ‘Code’ button at the top of this repository—as long as it is in your local branch.
2. Ensure Node.js and MongoDB is installed in your operating system. Please refer to MongoDB's [instructions](https://www.mongodb.com/docs/manual/administration/install-community/) on how to install it on your OS if need be.
3. Install all of the dependencies by entering the following command in terminal:
```
npm install express mongoose moment
```

## Usage
1. In the root directory of your application, start up the application by running the following command in terminal:
```
npm start
```
2. Open an API Client of your choice (i.e. [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/)). Enter `http://localhost:3001/api/(endpoint)` as the URL, and replace `(endpoint)` with `users` or `thoughts` to get its respective data.
3. The tables below outlines all methods and endpoints to make API requests for this application:

| I want to.. | Users | Thoughts |
| --- | --- | --- |
| Get all users/thoughts | GET /api/users | GET /api/thoughts  |
| Create new user/thought | POST /api/users | POST /api/thoughts  |
| Get user/thought by ID | GET /api/users/:id | GET /api/thoughts/:id  |
| Update user/thought | PUT /api/users/:id | PUT /api/thoughts/:id  |
| Delete user/thought | DELETE /api/users/:id | DELETE /api/thoughts/:id  |

| I want to.. | Users |
| --- | --- |
| Add a friend | POST /api/users/:userId/friends/:friendId |
| Remove a friend | DELETE /api/users/:userId/friends/:friendId  |

| I want to.. | Thoughts |
| --- | --- |
| Add a reaction | POST /api/thoughts/:thoughtId/reactions |
| Remove a reaction | DELETE /api/thoughts/:thoughtId/reactions |

4. Replace `:id`, `:userId`, `:friend`, and `:thoughtId` with their respective IDs from the database.

### Video Walkthrough
[Video Link Here](https://youtu.be/WuN6uqt1Dhw)

![demo.gif](/../main/assets/images/demo.gif)

## Questions
For any questions about this repository, please contact me at [demi.h@me.com](mailto:demi.h@me.com).

To view more of my works, please visit my GitHub: [demivlkv](https://github.com/demivlkv).