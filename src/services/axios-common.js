import axios from 'axios';

const httpService = axios.create({
  baseURL: 'https://run.mocky.io/v3/4ea5a157-d794-4f08-8920-bc2965f6d7f2',
  headers: {
    // Common headers, such as authorization
    // You can set your authentication token here
    // Authorization: 'Bearer yourAuthToken'
  }
});

export default httpService;
