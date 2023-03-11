import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const axios = require("axios");

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '6368590e77msh611582068d1eebcp1cb4dcjsnc0d4e199198f',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};


export const ApiService = {
    async fetching (url) {
        const respons =await axios.get(`${BASE_URL}/${url}`, options)
        return respons.data
    }
}

