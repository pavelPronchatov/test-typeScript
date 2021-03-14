import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});


export const usersApi = {
  async getUsers() {
    return (await instance.get("/users")).data;
  },
  async getAlbums(id: string) {
    return (await instance.get(`/users/${id}/albums`)).data;
  },
  async getPhotos(id: number) {
    return (await instance.get(`/albums/${id}/photos`)).data;
  }
}