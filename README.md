# Node js

## Run the server
1. Make sure the C++ server is up and running (see [here](https://github.com/maayanzahavi/YouTubeCppServer.git) branch `main`).
2. Clone the relevant repository to your computer.
3. Open terminal in the cloned folder.
4. Run __npm install__ to install dependencies.

## Create a config folder
1. Create a new folder in the repository named __config__.
2. Inside the __config__ folder create the file .env.
3. Add the following content to the .env file:
  ```bash
  CONNECTION_STRING="{your_mongoDB_connection_string}/YouTube_101"
  PORT={port_number}
  TCP_SERVER_PORT={cpp_server_port_numer}
  TCP_SERVER_IP=127.0.0.1
  ```
  For example:
  ```bash
  CONNECTION_STRING="mongodb://localhost:27017/YouTube_101"
  PORT=8200
  TCP_SERVER_PORT=5556
  TCP_SERVER_IP=127.0.0.1
  ```

* Open MongoDB on your computer.
* __Note__ that a JavaScript script will automatically run and initialize a __YouTube_101__ database when you run the server. Please make sure you don't have a DB with that called __YouTube_101__.

## Srart the web application
* Run the server using __npm start__ (if you're using unix, run __npm run startUnix__ instead).
* On your browser search for: http://localhost:{port_number} (the same port number you chose earlier).

# Enjoy!



