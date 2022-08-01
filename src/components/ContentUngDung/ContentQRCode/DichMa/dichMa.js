import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import InputText from '~/components/InputText';
import Button from '~/components/Button';
import * as qrService from '~/services/qrService';
import styles from './DichMa.module.scss';
import image from '~/assets/img/qrcode.svg';

const cx = classNames.bind(styles);
function DichMa({ children, title }) {
    const [imgQR, setImgQR] = useState('');
    const [textSub, setTextSub] = useState('');

    useEffect(() => {
        return () => {
            imgQR && URL.revokeObjectURL(imgQR.preview);
        };
    }, [imgQR]);

    var handlePreviewIMG = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setImgQR(file);
        setTextSub('');
    };

    const handleClickDichMa = () => {
        let formDataQR = new FormData();
        formDataQR.append('file', imgQR);
        const fetchApi = async () => {
            const result = await qrService.qrData(formDataQR);
            if (!!result) {
                setTextSub(result);
            } else alert('Mã QR của bạn không hợp lệ');
        };
        fetchApi();
    };

    return (
        <div className={cx('flex justify-center h-full flex-col p-6 pl-12 pr-12')}>
            <div className={cx('w-1/6 flex flex-col self-center items-center ')}>
                <p className={cx('tp-fw-600', 'text-center text-4xl')}>{title}</p>
                <div className={cx('tp-line', 'flex self-center mt-4 ')}></div>
            </div>
            <div className={cx('flex w-full h-full mt-4')}>
                <div className={cx('flex flex-col   justify-center w-1/2 pt-3 pb-3 pl-16 pr-16')}>
                    <InputText
                        title="Tải ảnh lên"
                        type="file"
                        display="d-none"
                        id="file-upload"
                        onChange={handlePreviewIMG}
                    >
                        <label
                            htmlFor="file-upload"
                            className={cx(
                                'rounded-lg text-center border flex justify-center h-full p-2  outline-none border-gray-300 bg-cyan-100  hover:bg-cyan-200 active:bg-cyan-400',
                            )}
                        >
                            Chọn hình
                        </label>
                    </InputText>

                    {!!imgQR ? (
                        <div className={cx('w-full h-full flex justify-around items-center flex-col')}>
                            <img
                                src={imgQR.length === 0 ? image : imgQR.preview}
                                alt="ma qr cua ban"
                                className={cx('w-1/3')}
                            />
                            <p>{imgQR.name}</p>
                            <Button
                                className={cx(
                                    'tp-bg-btn-teal tp-fw-600',
                                    ' text-center w-1/3 h-16  text-white flex items-center justify-center rounded-md hover:text-gray-500  ',
                                )}
                                onClick={handleClickDichMa}
                            >
                                Dịch mã
                            </Button>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className={cx('flex flex-col h-full justify-between w-1/2 pt-3 pb-3 pl-16 pr-16')}>
                    <InputText
                        title="Thông điệp đã dịch"
                        tag="textarea"
                        maxHeight="max-height"
                        value={textSub}
                    ></InputText>
                </div>
            </div>
        </div>
    );
}

export default DichMa;
