import axios from 'axios';

// API Youtube Data v3
export const KEY = 'AIzaSyB-IuCiQg73-JkklFcYlmistb0K-2FpigI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/', // Link the of Endpoint
});
