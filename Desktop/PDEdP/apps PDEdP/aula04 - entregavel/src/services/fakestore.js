import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export async function getUsers() {
  const { data } = await api.get('/users');
  return data;
}

export async function login(username, password) {
  const { data } = await api.post('/auth/login', { username, password });
  return data;
}

export async function getProducts() {
  const { data } = await api.get('/products');
  return data;
}

export async function getProductsByCategory(category) {
  const { data } = await api.get(`/products/category/${encodeURIComponent(category)}`);
  return data;
}

export async function getProduct(id) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
