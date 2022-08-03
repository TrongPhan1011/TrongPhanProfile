import classNames from 'classnames/bind';

import styles from './GioiThieu.module.scss';
import ItemCollapse from '~/components/ItemCollapse';
import { itemDataCollappse } from './dataCollapse';
import LienLac from '~/components/LienLac';

// img

const cx = classNames.bind(styles);
function GioiThieu() {
    const dataCollapse = itemDataCollappse;

    const renderItemCollapse = () => {
        return dataCollapse.map((item) => (
            <ItemCollapse key={item.id} titleHeader={item.titleHeader} dataItems={item.items}></ItemCollapse>
        ));
    };

    return (
        <>
            <div className={cx('bg-img-gt1', 'h-screen w-full')}>
                <div
                    className={cx(
                        '',
                        ' h-full flex items-center justify-center text-white',
                        'sm:w-3/5 mobile-md:w-full',
                    )}
                >
                    <div className={cx('', 'flex flex-col  ', 'sm:w-2/3 mobile-md:w-full')}>
                        <h1 className={cx('tp-text-title', 'text-center ')}>Giới thiệu về Trọng</h1>
                        <div className={cx('tp-line', ' flex self-center mt-5')}></div>
                        <div className={cx('', 'mt-10 text-justify')}>
                            <p className={cx('', 'mt-5 text-justify', 'mobile-md:p-10 mobile-md:text-center')}>
                                Xin chào! <br />
                                Tôi là Phan Hữu Trọng, hiện đang là sinh viên năm 4 của trường Đại học Công nghiệp TP.
                                HCM (IUH). Trang web này do tôi thiết kế và thực hiện, bạn có thể xem một vài thứ về tôi
                                ở ngay phần phía dưới.
                            </p>
                            <p className={cx('', 'mt-3', 'mobile-md:text-center')}>Cám ơn bạn đã quan tâm!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('bg-img-ky-nang', 'h-screen w-full  text-white', 'mobile-md:p-6')}>
                <div className={cx('h-1/5 flex flex-col justify-center pt-20 items-center', 'mobile-md:pt-16')}>
                    <h1 className={cx('tp-text-title', 'text-center ')}>Hiểu biết</h1>
                    <div className={cx('w-1/5 flex justify-center')}>
                        <div className={cx('tp-line', '  mt-5')}></div>
                    </div>
                </div>
                <div className={cx('flex justify-center h-4/5 pl-80 text-3xl', 'lg:pl-80 mobile-md:pl-0')}>
                    <ul className="steps steps-vertical ">
                        <li className="step step-accent after:!w-10 after:!h-10 after:!text-white">
                            Java, HTML, CSS, JavaScript...
                        </li>
                        <li className="step step-accent after:!w-10 after:!h-10 after:!text-white">
                            SQL: SQL Server, My SQL
                        </li>
                        <li className="step step-accent after:!w-10 after:!h-10 after:!text-white">NoSQL: MongoDB</li>
                        <li className="step step-accent  after:!w-10 after:!h-10 after:!text-white">
                            <span className="text-left">
                                {' '}
                                Lib, FrameWork: Bostrapt, TaiWind CSS, ReactJS, Spring, Hibernate,...
                            </span>
                        </li>
                        <li className="step step-accent after:!w-10 after:!h-10 after:!text-white">
                            GitHub, Figma,...
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={cx(
                    'bg-img-kinh-nghiem',
                    ' ',
                    'h-screen overflow-y-hidden  w-full flex justify-center pt-28 pb-28 ',
                )}
            >
                <div className={cx('w-3/4 h-full  rounded-lg overflow-y-scroll')}>{renderItemCollapse()}</div>
            </div>
            <div
                className={cx(
                    'bg-img-lien-he',
                    ' ',
                    'h-screen overflow-y-hidden  w-full flex   p-28 ',
                    'mobile-md:p-20',
                )}
            >
                <div className={cx('w-3/4 h-3/4', 'mobile-md:w-full mobile-md:p-6')}>
                    <div
                        className={cx(
                            'flex justify-center',
                            'w-3/4  h-full flex flex-col bg-white rounded-lg  ',
                            'mobile-md:w-full mobile-md:p-6 ',
                        )}
                    >
                        <LienLac />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GioiThieu;
