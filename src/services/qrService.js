import * as httpRequest from '~/utils/httpRequestQR';

export const qrData = async (dataImg) => {
    try {
        const res = await httpRequest.post(dataImg, { 'Content-Type': 'multipart/form-data' });

        return res[0].symbol[0].data;
    } catch (error) {
        console.log(error);
    }
};
