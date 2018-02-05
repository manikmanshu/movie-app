# REST API

### Data Model and requirements
Requirement specification available at [this link](https://github.com/dataoneio/full-stack-challenge/blob/master/README.md)
### Components
- Node.js - v6.10.2
- Express - v4.16.2
- Angular 5
- Mongo DB 
	
### Movie API

- GET /movie
	- get list of all movies
- GET /movie/ID
	- get movie with given id
- POST /movie
	- add movie with given properties
- DELETE /movie/ID
	- remove movie with given id
- PATCH /movie/ID
	- update movie with given id and properties
	
### Installation and files

- Add enviornment variable MONDODB_URI with value as DB connection string


```sh
# move to src directory
cd src

# dependencies
npm install

# start server
npm start
```

#### Local environment
To run locally:


```sh
Update MONDODB_URI in mongoose.js
$ npm start
```
