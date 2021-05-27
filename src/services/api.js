import axios from 'axios';

export default axios.create({
  baseURL: `https://import-task.herokuapp.com/api/v1/`,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  // headers: {
  //   'content-type':'application/octet-stream',
  //   'x-rapidapi-host':'example.com',
  //   'x-rapidapi-key': process.env.RAPIDAPI_KEY
  // },
});