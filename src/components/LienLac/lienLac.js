import classNames from 'classnames/bind';

import styles from './LienLac.module.scss';
import config from '~/config';
import fbIcon from '~/assets/img/logoFB.png';
import gitIcon from '~/assets/img/gitIcon.png';
import phoneIcon from '~/assets/img/phoneIcon.png';
import mailIcon from '~/assets/img/mailIcon.png';

const cx = classNames.bind(styles);

function LienLac() {
    return (
        <>
            <div className={cx(' flex flex-col self-center items-center', 'lg:w-1/6 md:w-2/6 ')}>
                <h1
                    className={cx(
                        'tp-text-title',
                        'text-center  mt-16',
                        'md:text-6xl sm:text-5xl sm:leading-[1.7rem] ',
                        ' mobile-md:leading-[3rem] mobile-md:text-4xl mobile-md:mt-6',
                    )}
                >
                    Liên hệ
                </h1>
                <div className={cx('tp-line', 'flex self-center mt-5', 'mobile-md:mt-2')}></div>
            </div>
            <div className={cx(' flex justify-end   h-1/6  ', 'lg:w-3/4 md:w-4/5 sm:w-3/4 md:mt-8 sm:mt-3')}>
                <div className={cx('', 'flex items-center')}>
                    <a href={config.linkConfig.facebook} target="_blanks">
                        <img
                            src={fbIcon}
                            alt="Facebook Trong Phan"
                            className={cx('lg:w-28 md:w-20 sm:w-16 mobile-md:w-10')}
                        />
                    </a>
                </div>
                <div
                    className={cx(
                        '',
                        'flex flex-col justify-center items-center  h-full w-3/4 text-4xl',
                        'sm:pb-10 md:pb-0 mobile-md:text-xl',
                    )}
                >
                    <a
                        href={config.linkConfig.facebook}
                        className={cx(
                            'underline-offset-2 underline text-blue-700',
                            'md:text-4xl sm:text-3xl mobile-md:text-2xl',
                        )}
                        target="_blanks"
                    >
                        Trọng Phan
                    </a>
                    <div
                        className={cx(
                            '',
                            'mt-3 w-full border-t-4 h-1/4 border-blue-700 rounded-r-md ',
                            'mobile-md:border-t-1',
                        )}
                    ></div>
                </div>
            </div>
            <div className={cx(' flex justify-end h-1/6  ', 'lg:w-3/4 md:w-4/5 sm:w-3/4 md:mt-8 sm:mt-3')}>
                <div className={cx('', 'flex items-center')}>
                    <img
                        src={phoneIcon}
                        alt="Dien thoai Trong Phan"
                        className={cx('lg:w-28 md:w-20 sm:w-16 mobile-md:w-10')}
                    />
                </div>
                <div
                    className={cx(
                        '',
                        'flex flex-col justify-center items-center  h-full w-3/4 text-4xl',
                        'sm:pb-10 md:pb-0  mobile-md:text-xl',
                    )}
                >
                    <div className={cx(' text-green-500', 'md:text-4xl sm:text-3xl mobile-md:text-2xl ')}>
                        {config.linkConfig.sdt}
                    </div>
                    <div className={cx('', 'mt-3 w-full border-t-4 h-1/4 border-green-500 rounded-r-md ')}></div>
                </div>
            </div>
            <div className={cx(' flex justify-end h-1/6  ', 'lg:w-3/4 md:w-4/5 sm:w-3/4 md:mt-8 sm:mt-3')}>
                <div className={cx('', 'flex items-center')}>
                    <a href={config.linkConfig.git} target="_blanks">
                        <img
                            src={gitIcon}
                            alt="Facebook Trong Phan"
                            className={cx('lg:w-28 md:w-20 sm:w-16 mobile-md:w-10')}
                        />
                    </a>
                </div>
                <div
                    className={cx(
                        '',
                        'flex flex-col justify-center items-center  h-full w-3/4 text-4xl',
                        'sm:pb-10 md:pb-0 mobile-md:text-xl',
                    )}
                >
                    <a
                        href={config.linkConfig.git}
                        className={cx(
                            'underline-offset-2 underline  text-black',
                            'md:text-4xl sm:text-3xl mobile-md:text-2xl',
                        )}
                        target="_blanks"
                    >
                        TrongPhan1011
                    </a>
                    <div className={cx('', 'mt-3 w-full border-t-4 h-1/4 border-black rounded-r-md ')}></div>
                </div>
            </div>
            <div className={cx(' flex justify-end  h-1/6  ', 'lg:w-3/4 md:w-4/5 sm:w-3/4 md:mt-8 sm:mt-3')}>
                <div className={cx('', 'flex items-center')}>
                    <img
                        src={mailIcon}
                        alt="email Trong Phan"
                        className={cx('lg:w-28 md:w-20 sm:w-16 mobile-md:w-10')}
                    />
                </div>
                <div
                    className={cx(
                        '',
                        'flex flex-col justify-center items-center  h-full w-3/4 text-4xl ',
                        'sm:pb-10 md:pb-0 mobile-md:text-xl',
                    )}
                >
                    <div className={cx(' text-red-500', 'md:text-4xl sm:text-3xl mobile-md:text-2xl')}>
                        {config.linkConfig.mail}
                    </div>
                    <div className={cx('', 'mt-3 w-full border-t-4 h-1/4 border-red-500 rounded-r-md ')}></div>
                </div>
            </div>
        </>
    );
}

export default LienLac;
