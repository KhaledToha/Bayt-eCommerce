# Bayt-eCommerce


---

## How to deploy the project:
* Clone this repo.
* Create a Postgres database on your system and generate it's endpoint URL.
* build the database using build.sql and fakeData.sql file located in `./server/database/config`.
* Go to the server directory a create a .env file the variables you need to define in the .env file are existed in the example.env file in server directory.
* standing on the root directory type these commands:
*  `npm run build`
* `npm start`
* first command will install dependancies in both server and client directories and build dist directory in client
* second command will run the server

now in the terminal you should be able to see the link click on it.




---

## Technilogies:

### Backend:
* **Postgresql:** database engine.
* **Express js**
* **pg module:** to connect to database from node
* **dotenv:** accessing enviroment variables
* **nodemon:** run the server in development mode

### Frontend:
* **React**
* **React Router Dom**
* **React Query:** for state management and cache handling
* **Material UI**
* **axios**







