import axios from 'axios';

export const http = axios.create({
  headers: {
    authorization:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjZmYTMzMjZlYjJhNTNmN2Y3ZTU5YzgiLCJpYXQiOjE1MzQ1NDk4MTgyOTJ9.tLaYUC4ej91IpjCzEWics5iQ2DXqZmRcwDxX6-4CmGM'
  }
});
