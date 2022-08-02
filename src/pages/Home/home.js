import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Button from '~/components/Button';
import Search from '~/components/Search';
import config from '~/config';
import LienLac from '~/components/LienLac';

import earth from '~/assets/img/earth.jpg';
import qrcode from '~/assets/img/qrcode.svg';
import musicIcon from '~/assets/img/music_icon.png';
import tpFile from '~/assets/img/file.png';
import lienhe from '~/assets/img/lienhe.png';
import lienhe2 from '~/assets/img/lienhe2.png';

const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <div className={cx('tp-bg-img', 'bg-fixed w-full  h-screen ')}>
                <Search />

                <div className={cx('', 'h-1/2 ')}>
                    <div className={cx('', 'text-6xl flex justify-end')}>
                        <p className={cx('tp-font-slogan', 'w-2/3 mt-4 text-center ')}>
                            Xin<span className="text-cyan-500"> chào!</span> <br /> Tôi là{' '}
                            <span className="text-cyan-600">Phan Hữu Trọng</span> <br />
                            Chào mừng bạn đến với<span className="text-cyan-700"> Website của tôi.</span>{' '}
                        </p>
                    </div>
                    <div className={cx('', 'flex justify-end mt-6')}>
                        <div className={cx('', 'flex justify-center w-2/3')}>
                            <Button
                                to={config.routeConfig.gioiThieu}
                                className={cx(
                                    'tp-bg-dark tp-text-cyan btn-hover',
                                    ' text-center w-1/4 h-16  flex items-center justify-center   border-cyan-500  border rounded-lg  active:bg-black',
                                )}
                            >
                                Xem thêm về Trọng
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('', 'h-max-screen flex')}>
                <div className={cx('', 'h-screen flex items-center  relative w-3/5 p-2 pl-8')}>
                    <div
                        className={cx(
                            'tp-h-screen-50',
                            'border-black border-8 w-3/5 flex self-center absolute -z-10 -top-8 -left-1/4',
                        )}
                    ></div>
                    <img src={earth} alt="earth" className={cx('tp-h-screen-50', 'h-96 w-3/5  absolute left-24')} />
                    <div
                        className={cx(
                            'tp-h-screen-50',
                            'border-cyan-400 border-8 border-b-0  w-3/5 absolute -z-10 top-1/2 left-1/4',
                        )}
                    ></div>
                </div>
                <div className={cx('', 'w-2/5 flex items-center')}>
                    <div className={cx('', 'flex flex-col  w-3/4  ')}>
                        <h1 className={cx('tp-text-title', 'text-center')}>Giới thiệu về trang web</h1>
                        <div className={cx('tp-line', 'flex self-center mt-5')}></div>
                        <div className={cx('', 'mt-10 text-center')}>
                            <p>
                                <i>
                                    Đây là Website được tạo ra bởi Phan Hữu Trọng với mục đích tạo ra một sản phẩm cá
                                    nhân để giúp mọi người có thể biết về tôi hơn. <br />
                                </i>
                            </p>
                            <p className={cx('', 'mt-5 text-justify')}>
                                - Website sẽ có thông tin của cá nhân tôi ở mục Giới thiệu. <br />
                                - Các sản phẩm đã làm từ trước tới nay của tôi ở mục Sản phẩm <br />- Các ứng dụng có
                                thể hữu ích đối với bạn ở mục Ứng dụng như: Tạo mã QR, Nghe những bài nhạc được tôi chia
                                sẻ, Chuyển đổi qua lại giữa Word - PDF
                            </p>
                            <p className={cx('', 'mt-8')}>Cám ơn bạn đã ghé lại trang web của tôi!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('tp-bg-ung-dung', 'h-screen bg-fixed w-full')}>
                <div className={cx(' flex  justify-center h-1/4')}>
                    <div className={cx('w-1/6 flex flex-col self-center items-center')}>
                        <h1 className={cx('tp-text-title', 'text-center text-white mt-16')}>Ứng dụng</h1>
                        <div className={cx('tp-line', 'flex self-center mt-5')}></div>
                    </div>
                </div>
                <div className={cx('flex justify-around h-3/4 mt-20')}>
                    <div
                        className={cx(
                            'flex justify-around flex-col items-center w-1/5 h-3/5 p-5 bg-white rounded-md shadow-md  opacity-80 hover:opacity-90',
                        )}
                    >
                        <img src={qrcode} alt="QR code" className={cx('h-2/3 w-3/4')} />
                        <Button
                            to={config.routeConfig.qrCode}
                            className={cx(
                                'tp-bg-dark tp-text-cyan btn-hover',
                                ' text-center w-3/4 h-16  flex items-center justify-center   border-white   border rounded-lg  active:bg-black',
                            )}
                        >
                            Tạo QR code
                        </Button>
                    </div>
                    <div
                        className={cx(
                            'tp-bg-nhac',
                            'flex justify-around flex-col items-center w-1/5 h-3/5 p-5  rounded-md shadow-md  opacity-80 hover:opacity-90',
                        )}
                    >
                        <img src={musicIcon} alt="QR code" className={cx('h-2/3 w-3/4')} />
                        <Button
                            to={config.routeConfig.music}
                            className={cx(
                                'tp-bg-dark tp-text-cyan btn-hover',
                                ' text-center w-3/4 h-16  flex items-center justify-center border-white  border rounded-lg  active:bg-black',
                            )}
                        >
                            Nghe nhạc
                        </Button>
                    </div>
                    <div
                        className={cx(
                            'tp-bg-file',
                            'flex justify-around flex-col items-center w-1/5 h-3/5 p-5  rounded-md shadow-md  opacity-80 hover:opacity-90',
                        )}
                    >
                        <img src={tpFile} alt="QR code" className={cx('h-2/3 w-3/4')} />
                        <Button
                            to={config.routeConfig.chuyenFile}
                            className={cx(
                                'tp-bg-dark tp-text-cyan btn-hover',
                                ' text-center w-3/4 h-16  flex items-center justify-center   border-white  border rounded-lg  active:bg-black',
                            )}
                        >
                            Chuyển đổi PDF
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('', 'h-screen flex relative items-center')}>
                <div className={cx('', 'h-screen w-3/5  ')}>
                    <div className={cx(' flex flex-col justify-center w-4/5 h-full p-4')}>
                        <LienLac />
                    </div>
                </div>
                <div className={cx('', 'h-screen w-2/5  ')}>
                    <img src={lienhe} alt="lien he" className={cx('', 'h-screen w-full')} />
                </div>
                <div className={cx('tp-right', 'h-3/5 w-1/2 absolute z-10')}>
                    <img src={lienhe2} alt="lien he" className={cx('', 'h-full w-full')} />
                </div>
            </div>
            <div className={cx('tp-bg-footer', 'h-screen bg-fixed ')}>
                <div className={cx('', 'flex justify-center items-end h-2/3 w-full')}>
                    <Button
                        to={config.routeConfig.gioiThieu}
                        className={cx(
                            'tp-btn-gradient tp-font-logo',
                            'flex justify-center items-center text-4xl  p-8 w-2/12 rounded-md',
                        )}
                    >
                        Trọng Phan
                    </Button>
                </div>
                <div className={cx('', 'flex justify-center items-end italic text-xl  text-white w-full h-1/3')}>
                    <p className="mb-6">Design by Trong Phan</p>
                </div>
            </div>
        </>
    );
}

export default Home;
