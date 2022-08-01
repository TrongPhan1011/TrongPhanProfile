import * as httpRequest from '~/utils/httpRequest';

export const search = async (albumId) => {
    try {
        const res = await httpRequest.get('photos/', {
            params: {
                albumId: albumId,
            },
        });

        return res;
    } catch (error) {
        console.log(error);
    }
};
