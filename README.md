
# Backend Tasks

An assignment of 2 Tasks as follows :   
Task 1: Sorting Large Array having limited memory  
Task 2: RestAPI Interactaction with NewsAPI & OpenweatherAPI Auth
RestAPI Hosted Live Here for Task 2: Check in Action [Check in Action Taken Down](https://backendtask.miteshmetha.com) 🥳 

# Task-1

Implemented NPM Package external-sort which performs fs chunk read and then Merge sort  

### Steps to Setup & Run

```
git clone https://github.com/Meetmetha/BackendTasks
cd BackendTasks
cd Task1
npm install
npm run start
```

### Output 🥳

unsorted.txt document having Unsorted short integers are sorted in file sortedarray.txt

# Task-2 
API Documentation for Task 2 here   
[Go to the POSTMAN API Documentation](https://documenter.getpostman.com/view/14843355/TzzGJE4y)  
Using ExpressJS, Authentication is managed using JWT & Authenticated requests should be sent as  
Authorization: bearer Tokenhere

### Steps to Setup
Note: git init is required before npm install

```
git clone https://github.com/Meetmetha/BackendTasks
cd Task2
git init
npm install
```

### Setup Enviornment & Keys (Create filename : .env)
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

### Output 🥳
```
visit your localhost:3000 for ExpressJS refer below documentation for endpoints
```
API Documentation: https://documenter.getpostman.com/view/14843355/TzzGJE4y
Live Hosted URL : https://backendtask.miteshmetha.com

### Troubleshooting 
Husky Install Error :
Use "git init" command again 

Unable to fetch result :
Use "npm run dev" and check stack trace of Error

Getting Invalid Request in response :  
Pass authentication JWT like this   
Authorization: bearer Tokenhere

Getting Session Expired:
Change devicehash header (This is because of Auth Logic of device)
Reach me if needed info about It

Any other Issues :
Feel free to reach me

### Reachme

Mitesh Metha  
https://miteshmetha.com



