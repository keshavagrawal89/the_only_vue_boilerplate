import httpService from './axios-common';

// const userService = {
//   getUser(userId) {
//     return httpService.get(`/users/${userId}`);
//   },
//   // Other user-related methods
// };

const sessionService = {
  getPosts() {
    return httpService.get('/');
  },
  createPost(newPost) {
    return httpService.post('/posts', newPost);
  },
  // Other post-related methods
};

export { sessionService };
