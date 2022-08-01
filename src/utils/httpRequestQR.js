import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.qrserver.com/v1/read-qr-code/',
});

export const post = async (formData) => {
    const resp = await axios.post('https://api.qrserver.com/v1/read-qr-code/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });

    return resp.data;
};

export default request;
