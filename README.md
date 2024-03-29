# Express Stopwatch

This project implements a simple stopwatch using Node.js and Express. It offers the ability to start, pause, continue, reset, and check the elapsed time through a web server.

## Requirements

To run this project, you need Node.js and npm (Node Package Manager) installed on your system. You can download and install Node.js and npm from [nodejs.org](https://nodejs.org/).

## Installation

Follow the steps below to set up the project on your local machine.

1. Clone the repository to your local machine using:
   ```bash
   git clone <REPOSITORY_URL>
   ```

## Navigate to the project directory:

cd <DIRECTORY_NAME>

## Install the project dependencies:

npm install

## Running the Server:

To start the server, run the following command in the terminal within the project directory:
npm start

The server will be running at http://localhost:3000.

## Available Routes

**/start**: Starts the stopwatch. Does nothing if it is already running or paused.
**/pause**: Pauses the stopwatch if it is running.
**/continue**: Continues the stopwatch if it is paused.
**/reset**: Resets the stopwatch to 0, regardless of its current state.
**/stopwatch**: Displays the elapsed time in minutes and seconds.

## Contributing

Feel free to contribute to this project. Please open an issue to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

[Eber Silva]
