import axios from 'axios';

// API Youtube Data v3
export const KEY = 'AIzaSyDiLOH2TZkcehQGkqfDp6u7u0nE5J9NXYw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/', // Link the of Endpoint
});
