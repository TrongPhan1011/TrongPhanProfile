import classNames from 'classnames/bind';
import ContentQRCode from '~/components/ContentUngDung/ContentQRCode';
import styles from './QRCode.module.scss';

const cx = classNames.bind(styles);

function QRcode() {
    return (
        <>
            <div className={cx('tp-bg-qr', 'w-full', 'sm:h-[70vh] mobile-md:h-[60vh]')}>
                <div
                    className={cx(
                        '',
                        'w-1/2 h-5/6 flex justify-center flex-col items-center text-center',
                        'mobile-md:w-full sm:w-2/3 lg:w-1/2',
                    )}
                >
                    <p className={cx('tp-text-title', 'mb-6')}>
                        Chuyển thông điệp của bạn <br /> thành mã QR
                    </p>
                    {/* <Button
                        className={cx(
                            'tp-bg-dark tp-text-cyan btn-hover',
                            'text-center w-1/5 h-16  flex items-center justify-center border-white  border rounded-lg  active:bg-black',
                        )}
                    >
                        Tạo mã ngay
                    </Button> */}
                </div>
            </div>
            <ContentQRCode />
        </>
    );
}

export default QRcode;
