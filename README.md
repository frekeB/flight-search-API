# Flight search api

The Flight Search API is a Node.js application built with Express that allows users to search for flight information based on specific parameters using a third-party flight search API provider(Flight Radar from Rapid Api). It validates input parameters, fetches flight data, and returns relevant information to the user.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- [RapidAPI](https://rapidapi.com) account (to obtain API keys)
or use any Api of your choice.

### Installation

1. Clone this repository to your local machine.

        (i) Navigate to your project directory:
            cd flight-api
        (ii) Install the required dependencies:
            npm install

2. Running the Server
    Start the server by running:
    npm start

3. The server will run on the specified port.

4. Making API Requests
    Use tools like Postman or Thunder Client to make API requests to the following endpoint:
    GET < http://127.0.0.1/0000>.
    Parameters:

    Query: (you can query flight Number, Name, id)
    E.g: query : AirPeace

    The API will return flight data or error messages based on the provided parameters.

    Configuration
    Before running the server, you need to set up your environment variables by creating a .env file in the project directory:

   - PORT =  3000 default port
   - APIURI=<https://api.example.com/flights>
   - RAPIDAPI_KEY=your-X-RapidApi-Key,
   - RAPIDAPI_HOST=your-X-RapidApi-Host.
    Replace your-rapidapi-key and your-rapidapi-host with your actual RapidAPI key and host. NB: you have to create an account with Rapid API before you can have access to the api key and every other detail.

    Send your request.
    You should get your desire response on clicking of the send button.

    **** TA DA !! 
    you were able to search for a flight based on a query param.
