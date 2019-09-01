import axios from '../../core/axios';

export default {
   get: id => axios.get(`/posts${id ? '/' + id : ''}`),
   delete: id => axios.delete(`/posts/${id}`),
   post: data => axios.post(`/posts`, data),
   getSearch: query => axios.get(`/posts/search/${query }`, query),
   put: (id, data) => {axios.put(`/posts/${id}`, data)},
};
