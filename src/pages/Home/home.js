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
            <div
                className={cx(
                    'tp-bg-img',
                    'bg-fixed w-full',
                    'lg:h-screen md:h-custom-550 sm:h-custom-350 mobile-md:h-[300px] mobile-md:bg-[length:100%_100%] sm:bg-cover ',
                )}
            >
                <Search />

                <div className={cx('', 'lg:h-1/2 md:h-2/3 sm:h-1/3 lg:mt-0 md:mt-20 mobile-md:h-1/2')}>
                    <div
                        className={cx(
                            '',
                            ' flex justify-end',
                            'md:text-6xl sm:text-4xl mobile-md:justify-center mobile-md:text-white',
                        )}
                    >
                        <p
                            className={cx(
                                'tp-font-slogan',
                                'w-2/3 mt-4 text-center ',
                                'md:leading-[5rem] sm:leading-[3rem] mobile-md:leading-[1.7rem]  mobile-md:rounded-lg',
                            )}
                        >
                            Xin<span className="text-cyan-500"> chào!</span> <br /> Tôi là{' '}
                            <span className="text-cyan-600">Phan Hữu Trọng</span> <br />
                            Chào mừng bạn đến với<span className="text-cyan-700"> Website của tôi.</span>{' '}
                        </p>
                    </div>
                    <div className={cx('', 'flex justify-end mt-6', 'mobile-md:justify-center')}>
                        <div className={cx('', 'flex justify-center w-2/3')}>
                            <Button
                                to={config.routeConfig.gioiThieu}
                                className={cx(
                                    'tp-bg-dark tp-text-cyan btn-hover',
                                    ' text-center  h-16  flex items-center justify-center   border-cyan-500  border rounded-lg  active:bg-black',
                                    'lg:w-1/4 md:w-1/3',
                                )}
                            >
                                Xem thêm về Trọng
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={cx(
                    '',
                    ' flex',
                    'lg:h-screen md:h-custom-550 sm:h-custom-350 mobile-md:h-custom-300 mobile-md:p-6',
                )}
            >
                <div
                    className={cx(
                        '',
                        'h-full flex items-center  relative  p-2 pl-8',
                        'lg:w-3/5 md:w-2/5 sm:w-3/5 mobile-md:hidden',
                    )}
                >
                    <div
                        className={cx(
                            'border-black border-8 w-3/5 flex self-center absolute -z-10 -top-8 -left-1/4',
                            'lg:h-screen-50 sm:h-custom-300 ',
                        )}
                    ></div>
                    <img src={earth} alt="earth" className={cx('h-96 w-3/5  absolute left-24', 'lg:h-screen-50')} />
                    <div
                        className={cx(
                            'border-cyan-400 border-8 border-b-0  w-3/5 absolute -z-10 top-1/2 left-1/4',
                            'lg:h-screen-50 sm:h-custom-300',
                        )}
                    ></div>
                </div>
                <div
                    className={cx(
                        '',
                        ' flex  items-center',
                        'lg:w-2/5 md:w-3/5 sm:w-1/2  md:justify-center ',
                        'mobile-md:h-full mobile-md:leading-[1.7rem] ',
                    )}
                >
                    <div className={cx('', 'flex flex-col  ', 'md:w-3/4 sm:w-5/6', 'mobile-md:h-full')}>
                        <h1
                            className={cx(
                                'tp-text-title',
                                'text-center',
                                'md:text-6xl sm:text-4xl md:leading-[5rem] sm:leading-[2.5rem] ',
                                'mobile-md:leading-[1.7rem] mobile-md:text-3xl',
                            )}
                        >
                            Giới thiệu về trang web
                        </h1>
                        <div className={cx('tp-line', 'flex self-center mt-5', 'mobile-md:mt-0 mobile-md:w-24')}></div>
                        <div
                            className={cx(
                                '',
                                'mt-10 text-center',
                                'md:text-2xl sm:text-xl sm:leading-[1.5rem]',
                                'mobile-md:mt-4 mobile-md:text-xl',
                            )}
                        >
                            <p>
                                <i>
                                    Đây là Website được tạo ra bởi Phan Hữu Trọng với mục đích tạo ra một sản phẩm cá
                                    nhân để giúp mọi người có thể biết về tôi hơn. <br />
                                </i>
                            </p>
                            <p className={cx('', 'mt-5 text-justify', 'mobile-md:mt-2')}>
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
            <div
                className={cx(
                    'tp-bg-ung-dung',
                    ' bg-fixed w-full',
                    'lg:h-screen md:h-custom-550 sm:h-custom-350',
                    'mobile-md:p-3',
                )}
            >
                <div className={cx(' flex  justify-center h-1/4', 'mobile-md:h-1/6')}>
                    <div className={cx('w-1/6 flex flex-col self-center items-center ', 'mobile-md:w-1/3 ')}>
                        <h1
                            className={cx(
                                'tp-text-title',
                                'text-center text-white mt-16',
                                'md:text-6xl sm:text-4xl sm:leading-[1.7rem] ',
                                ' mobile-md::leading-[1.6rem] mobile-md:text-3xl',
                            )}
                        >
                            Ứng dụng
                        </h1>
                        <div className={cx('tp-line', 'flex self-center mt-5', 'mobile-md:mt-2')}></div>
                    </div>
                </div>
                <div
                    className={cx(
                        'flex justify-around h-3/4 ',
                        'md:mt-20 sm:mt-6',
                        'mobile-md:h-4/6 mobile-md:flex-col mobile-md:items-center  ',
                    )}
                >
                    <div
                        className={cx(
                            'flex justify-around flex-col items-center   p-5 bg-white rounded-md shadow-md  opacity-80 hover:opacity-90',
                            'lg:w-1/5 md:w-1/4 sm:w-1/4 md:h-3/5 sm:h-4/5',
                            'mobile-md:h-64 mobile-md:w-2/5 mobile-md:mt-3',
                        )}
                    >
                        <img src={qrcode} alt="QR code" className={cx('h-2/3 w-3/4')} />
                        <Button
                            to={config.routeConfig.qrCode}
                            className={cx(
                                'tp-bg-dark tp-text-cyan btn-hover',
                                ' text-center w-3/4 h-16  flex items-center justify-center   border-white   border rounded-lg  active:bg-black',
                                'sm:mt-4 md:mt-2 lg:mt-0',
                            )}
                        >
                            Tạo QR code
                        </Button>
                    </div>
                    <div
                        className={cx(
                            'tp-bg-nhac',
                            'flex justify-around flex-col items-center  p-5  rounded-md shadow-md  opacity-80 hover:opacity-90',
                            'lg:w-1/5 md:w-1/4 sm:w-1/4 md:h-3/5 sm:h-4/5',
                            'mobile-md:h-64 mobile-md:w-2/5 mobile-md:mt-3',
                        )}
                    >
                        <img src={musicIcon} alt="QR code" className={cx('h-2/3 w-3/4')} />
                        <Button
                            to={config.routeConfig.music}
                            className={cx(
                                'tp-bg-dark tp-text-cyan btn-hover',
                                ' text-center w-3/4 h-16  flex items-center justify-center border-white  border rounded-lg  active:bg-black',
                                'sm:mt-4 md:mt-2 lg:mt-0',
                            )}
                        >
                            Nghe nhạc
                        </Button>
                    </div>
                    <div
                        className={cx(
                            'tp-bg-file',
                            'flex justify-around flex-col items-center   p-5  rounded-md shadow-md  opacity-80 hover:opacity-90',
                            'lg:w-1/5 md:w-1/4 sm:w-1/4 md:h-3/5 sm:h-4/5',
                            'mobile-md:h-64 mobile-md:w-2/5 mobile-md:mt-3',
                        )}
                    >
                        <img src={tpFile} alt="QR code" className={cx('h-2/3 w-3/4')} />
                        <Button
                            to={config.routeConfig.chuyenFile}
                            className={cx(
                                'tp-bg-dark tp-text-cyan btn-hover',
                                ' text-center w-3/4 h-16  flex items-center justify-center   border-white  border rounded-lg  active:bg-black',
                                'sm:mt-4 md:mt-2 lg:mt-0',
                            )}
                        >
                            Chuyển đổi PDF
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className={cx(
                    '',
                    ' flex relative items-center',
                    'lg:h-screen md:h-custom-550 sm:h-custom-350 mobile-md:h-custom-300',
                )}
            >
                <div className={cx('', 'h-full ', 'w-3/5 ')}>
                    <div className={cx(' flex flex-col justify-center w-4/5 h-full', 'lg:p-4 md:p-10')}>
                        <LienLac />
                    </div>
                </div>
                <div className={cx('', 'h-full w-2/5  ')}>
                    <img src={lienhe} alt="lien he" className={cx('', 'h-full w-full')} />
                </div>
                <div className={cx('tp-right', ' w-1/2 absolute z-10', 'md:h-3/5 sm:h-4/5')}>
                    <img src={lienhe2} alt="lien he" className={cx('', 'h-full w-full')} />
                </div>
            </div>
            <div
                className={cx(
                    'tp-bg-footer',
                    'bg-fixed ',
                    'lg:h-screen md:h-custom-550 sm:h-custom-350 lg:bg-cover md:bg-[length:100%_100%] md:bg-top mobile-md:h-custom-300',
                )}
            >
                <div className={cx('', 'flex justify-center items-end h-2/3 w-full')}>
                    <Button
                        to={config.routeConfig.gioiThieu}
                        className={cx(
                            'tp-btn-gradient tp-font-logo',
                            'flex justify-center items-center text-4xl text-center  p-8 w-2/12 rounded-md',
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
