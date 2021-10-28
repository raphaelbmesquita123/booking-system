import axios from 'axios'

export const apiStrapi = axios.create({
    baseURL: 'http://localhost:1337/',
  })
  