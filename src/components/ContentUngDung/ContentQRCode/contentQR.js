import { useState } from 'react';
import classNames from 'classnames/bind';

import ButtonCircle from '~/components/Button/ButtonCircle';
import TaoMa from './TaoMa';
import DichMa from './DichMa';
import styles from './contentQR.module.scss';
const cx = classNames.bind(styles);

function ContentQRCode({ children }) {
    const [statusUngDung, setStatusUngDung] = useState(true);

    const renderContent = () => {
        if (statusUngDung === true) return <TaoMa title="Tạo mã" />;
        else return <DichMa title="Dịch mã" />;
    };

    return (
        <div
            className={cx(
                ' tp-linnear',
                'w-full p-12 pl-48 pr-48 shadow-lg',
                'mobile-md:pl-6  mobile-md:pr-6 sm:h-[93vh] ',
            )}
        >
            <div className={cx('w-full h-1/5 flex ')}>
                <div className={cx('w-1/2 h-full flex justify-center items-center ')}>
                    <ButtonCircle bg="teal" textWhite onClick={() => setStatusUngDung(true)}>
                        Tạo mã
                    </ButtonCircle>
                </div>
                <div className={cx('w-1/2 h-full flex justify-center items-center ')}>
                    <ButtonCircle
                        bg="danger"
                        textWhite
                        onClick={() => {
                            setStatusUngDung(false);
                        }}
                    >
                        Dịch mã
                    </ButtonCircle>
                </div>
            </div>
            <div className={cx('w-full pt-14 pb-2 ', 'sm:h-4/5')}>
                <div className={cx('tp-bg-cyan-light', ' w-full h-full rounded-lg border border-gray-300 ')}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default ContentQRCode;
