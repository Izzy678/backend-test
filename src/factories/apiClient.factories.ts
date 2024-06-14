import axios, { AxiosInstance } from 'axios';

export class ApiClientFactory {
  static create():AxiosInstance {
    return axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com', 
    });
  }
}
