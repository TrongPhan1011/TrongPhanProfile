import classNames from 'classnames/bind';
import styles from './popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    return (
        <div
            className={cx('wrapperHome', 'bd', '  w-full bg-white rounded-md shadow-md border-cyan-500 border  -mt-3')}
        >
            {children}
        </div>
    );
}

export default Wrapper;
