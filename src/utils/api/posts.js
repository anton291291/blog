import axios from '../../core/axios';

export default {
   get: id => axios.get(`/posts${id ? '/' + id : ''}`),
   delete: id => axios.delete(`/posts/${id}`)
};
