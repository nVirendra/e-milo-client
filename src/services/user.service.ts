import API from './api';

export const getUserProfile = (userId: string) => API.get(`/users/${userId}`);
export const fetchUsers = (search = '') =>
  API.get(`/users?search=${encodeURIComponent(search)}`);
export const followUser = (userId: string) =>
  API.post(`/users/${userId}/follow`);
export const unfollowUser = (userId: string) =>
  API.post(`/users/${userId}/unfollow`);
export const getUserPosts = (userId: string) =>
  API.get(`/posts/user/${userId}`);
