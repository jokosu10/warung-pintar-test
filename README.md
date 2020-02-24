# PRE-TEST FOR BACKEND ENGINEER

Create simple API.

### Prerequisites

Make sure you install this in your workspace.

```
1. NodeJS LTS Version (recommended v10.15.x)
2. NPM (recommended v6.9.x)
3. Git (recommended v2.22.x)
```

### Installing

Step by step for installing apps.
```
1. git clone https://github.com/jokosu10/warung-pintar-test.git
2. cd warung-pintar-test
3. npm install
```

## Running the apps
Run this apps with command
```
nodemon app.js
```
If you want to run apps with docker, run this apps with command
```
1. docker build -t <username>/template-node-app .
2. docker run -p 49160:4000 -d <username>/template-node-app
```

## Running the tests

Run the automated tests for this system with command
```
npm run test
```

## How to running this program

Before running this program, please open postman

1. API for sending a message Just send one parameter string for message After sending should be get response (REST / GraphQL / etc)
```
http://localhost:4000/api/message
```
With parameter body json
```
{
	"message": "Testing number 2"
}
```
Response after sending message
```
{
    "message": "Success to add message"
}
```

2. API for collect message that has been sent out API can get all previously sent messages (REST / GraphQL / etc)
```
http://localhost:4000/api/message
```
Response for collect message
```
{
    "1": {
        "message": "Intial Message"
    },
    "2": {
        "message": "Testing number 2"
    }
}
```


## Built With

* [Express JS](https://expressjs.com/) - The web framework used
* [NPM](https://www.npmjs.com/) - Dependency Management

## Authors

* **Joko Susilo < susilo.j8@gmail.com >**
