import axios from 'axios';

const request = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const get = async (path, option = {}) => {
    const resp = await request.get(path, option);

    return resp.data;
};

export default request;
