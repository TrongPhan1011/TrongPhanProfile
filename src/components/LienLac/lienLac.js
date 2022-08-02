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
            <div className={cx('w-1/6 flex flex-col self-center items-center')}>
                <h1 className={cx('tp-text-title', 'text-center  mt-16')}>Liên hệ</h1>
                <div className={cx('tp-line', 'flex self-center mt-5')}></div>
            </div>
            <div className={cx(' flex justify-end w-3/4 h-1/6  mt-8')}>
                <div className={cx('', 'flex items-center')}>
                    <a href={config.linkConfig.facebook} target="_blanks">
                        <img src={fbIcon} alt="Facebook Trong Phan" className={cx(' w-28')} />
                    </a>
                </div>
                <div className={cx('', 'flex flex-col justify-center items-center  h-full w-3/4 text-4xl')}>
                    <a
                        href={config.linkConfig.facebook}
                        className={cx('underline-offset-2 underline text-blue-700')}
                        target="_blanks"
                    >
                        Trọng Phan
                    </a>
                    <div className={cx('', 'mt-3 w-full border-t-4 h-1/4 border-blue-700 rounded-r-md ')}></div>
                </div>
            </div>
            <div className={cx(' flex justify-end w-3/4 h-1/6  mt-8')}>
                <div className={cx('', 'flex items-center')}>
                    <img src={phoneIcon} alt="Dien thoai Trong Phan" className={cx(' w-28')} />
                </div>
                <div className={cx('', 'flex flex-col justify-center items-center  h-full w-3/4 text-4xl')}>
                    <div className={cx(' text-green-500')}>{config.linkConfig.sdt}</div>
                    <div className={cx('', 'mt-3 w-full border-t-4 h-1/4 border-green-500 rounded-r-md ')}></div>
                </div>
            </div>
            <div className={cx(' flex justify-end w-3/4 h-1/6  mt-8')}>
                <div className={cx('', 'flex items-center')}>
                    <a href={config.linkConfig.git} target="_blanks">
                        <img src={gitIcon} alt="Facebook Trong Phan" className={cx(' w-28')} />
                    </a>
                </div>
                <div className={cx('', 'flex flex-col justify-center items-center  h-full w-3/4 text-4xl')}>
                    <a
                        href={config.linkConfig.git}
                        className={cx('underline-offset-2 underline  text-black')}
                        target="_blanks"
                    >
                        TrongPhan1011
                    </a>
                    <div className={cx('', 'mt-3 w-full border-t-4 h-1/4 border-black rounded-r-md ')}></div>
                </div>
            </div>
            <div className={cx(' flex justify-end w-3/4 h-1/6  mt-8')}>
                <div className={cx('', 'flex items-center')}>
                    <img src={mailIcon} alt="email Trong Phan" className={cx(' w-28')} />
                </div>
                <div className={cx('', 'flex flex-col justify-center items-center  h-full w-3/4 text-4xl ')}>
                    <div className={cx(' text-red-500')}>{config.linkConfig.mail}</div>
                    <div className={cx('', 'mt-3 w-full border-t-4 h-1/4 border-red-500 rounded-r-md ')}></div>
                </div>
            </div>
        </>
    );
}

export default LienLac;
