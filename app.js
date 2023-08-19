// app.js
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config();



const app = express();
const PORT = process.env.PORT ;

app.use(express.json());

  /** 
   * Desc 
   * Get
   * Param: query param
  */


app.get('/', async (req, res) =>{
    //console.log( req.query)
    try {
    const options = {
        method: 'GET',
        url: process.env.APIURI,
        params: req.query,
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      };
      
        const response = await axios.request(options);
         res.json(response.data);
      } catch (error) {
          console.error(error);
      }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 
