import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import QRCode from 'qrcode';
import DomToImage from 'dom-to-image';

import { useDebounce } from '~/hooks';
import InputText from '~/components/InputText';

import Button from '~/components/Button';
import styles from './taoMa.module.scss';
import image from '~/assets/img/qrcode.svg';

const cx = classNames.bind(styles);

function TaoMa({ title = '' }) {
    const [tieuDe, setTieuDe] = useState('Tiêu đề');
    const [loiNhan, setLoiNhan] = useState('Lời nhắn');
    const [linkThongDiep, setLinkThongDiep] = useState();
    const [linkDownloadAll, setLinkDownloadAll] = useState('');
    let imgAllRef = useRef();

    const debouceValueTieuDe = useDebounce(tieuDe, 700);
    const debouceValueLoiNhan = useDebounce(loiNhan, 700);
    const debouceValueLinkThongDiep = useDebounce(linkThongDiep, 700);
    const debouceLinkDownloadAll = useDebounce(linkDownloadAll, 500);

    const handleThongDiep = (value) => {
        if (value.length === 0) setLinkThongDiep(null);
        else {
            setLinkThongDiep(generateQRCode(value));
            handleDownloadAll();
        }
    };

    const generateQRCode = async (value) => {
        try {
            const resp = await QRCode.toDataURL(value);
            setLinkThongDiep(resp);
        } catch (error) {
            console.log(error);
        }
    };
    const handleDownloadAll = () => {
        if (!!imgAllRef.current) {
            DomToImage.toPng(imgAllRef.current)
                .then(function (dataUrl) {
                    setLinkDownloadAll(dataUrl);
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        }
    };
    handleDownloadAll();

    return (
        <>
            <div className={cx('flex  justify-center flex-col h-full p-6 pl-12 pr-12')}>
                <div className={cx('w-1/6 flex flex-col self-center items-center ')}>
                    <p className={cx('tp-fw-600', 'text-center text-4xl')}>{title}</p>
                    <div className={cx('tp-line', 'flex self-center mt-4')}></div>
                </div>
                <div className={cx('flex w-full mt-4')}>
                    <div className={cx('flex flex-col justify-between w-1/3 p-3')}>
                        <InputText
                            title="Nhập tiêu đề"
                            onChange={(e) => {
                                setTieuDe(e.target.value);
                            }}
                        />
                        <InputText
                            title="Nhập lời nhắn"
                            onChange={(e) => {
                                setLoiNhan(e.target.value);
                            }}
                        />
                        <InputText
                            title="Nhập thông điệp muốn chuyển"
                            tag="textarea"
                            height="text-area"
                            onChange={(e) => {
                                handleThongDiep(e.target.value);
                            }}
                        />
                    </div>
                    <div className={cx('flex justify-between items-center flex-col w-1/3 pt-3 mb-7  pl-28 pr-28')}>
                        <h4 className={cx('text-center')}>Mã của bạn</h4>
                        <img
                            src={debouceValueLinkThongDiep ? debouceValueLinkThongDiep : image}
                            alt="ma qr cua ban"
                            className={cx('w-full')}
                        />
                        <Button
                            href={debouceValueLinkThongDiep}
                            download
                            className={cx(
                                'tp-bg-dark  btn-hover',
                                ' text-center w-full h-16 text-white flex items-center justify-center   border-white   border rounded-lg  active:bg-black',
                            )}
                        >
                            Tải mã
                        </Button>
                    </div>
                    <div className={cx('flex flex-col justify-between items-center w-1/3 p-3 pb-7')}>
                        <div ref={imgAllRef} className={cx('tp-preview-qr', 'p-8 bg-white rounded-lg overflow-hidden')}>
                            <p className={cx('tp-fw-600', 'text-3xl text-center ')}>{debouceValueTieuDe}</p>
                            <p className={cx('', 'text-md mt-3 italic  text-center ')}>{debouceValueLoiNhan}</p>
                            <div className={cx('w-full p-5 flex justify-center')}>
                                <img
                                    src={debouceValueLinkThongDiep ? debouceValueLinkThongDiep : image}
                                    alt="ma qr cua ban"
                                    className={cx('w-1/2')}
                                />
                            </div>
                        </div>
                        <Button
                            className={cx(
                                'tp-bg-btn-teal tp-fw-600',
                                ' text-center w-3/5 h-16  text-white flex items-center justify-center rounded-md hover:text-gray-500  ',
                            )}
                            href={debouceLinkDownloadAll}
                            download
                        >
                            Tải toàn bộ
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaoMa;
