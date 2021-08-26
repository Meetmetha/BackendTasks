
# Backend Tasks

An assignment of 2 Tasks as follows :   
Task 1: Sorting Large Array having limited memory  
Task 2: RestAPI Interactaction with NewsAPI & OpenweatherAPI Auth

# Task-1

Implemented NPM Package external-sort which performs fs chunk read and then Merge sort  

### Steps to Setup & Run

```
git clone https://github.com/Meetmetha/BackendTasks
cd Task1
npm install
npm run start
```

# Task-2 
API Documentation for Task 2 here   
[Go to the POSTMAN API Documentation](https://documenter.getpostman.com/view/14843355/TzzGJE4y)  
Using ExpressJS, Authentication is managed using JWT & Authenticated requests should be sent as  
Authentication: bearer Tokenhere

### Steps to Setup
Note: git init is required before npm install

```
git clone https://github.com/Meetmetha/BackendTasks
cd Task2
git init
npm install
```

### Setup Enviornment & Keys
```
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/dbname
JWT_SECRET=ThisIsMySecretJWT
NEWSAPIKEY=API key from newsapi.org
WEATHERAPI=API key from openweathermap.org
```

### Run Project
```
npm run dev OR npm run start
```

API Documentation: https://documenter.getpostman.com/view/14843355/TzzGJE4y

### Troubleshooting 
Husky Install Error :
Use "git init" command again 

Unable to fetch result :
Use "npm run dev" and check stack trace of Error

Any other Issues :
Feel free to reach me

### Reachme

Mitesh Metha  
https://miteshmetha.com



