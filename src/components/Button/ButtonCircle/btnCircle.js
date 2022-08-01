import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './btnCircle.module.scss';

const cx = classNames.bind(styles);

function ButtonCircle({ children, className, type, to, href, onClick, bg = 'primary', textWhite, ...passProps }) {
    let Comp = 'button';
    let classNameDefault = cx(
        'tp-bg-circle',
        'flex items-center h-16 py-9 p-5 ml-2  border-cyan-500  border rounded-  active:bg-black',
    );
    const _props = {
        onClick,
        type,

        ...passProps,
    };

    if (to) {
        _props.to = to;
        Comp = Link;
    } else if (href) {
        _props.href = href;
        Comp = 'a';
    }

    classNameDefault = cx('tp-bg-circle', 'flex justify-center items-center   text-3xl', bg, {
        textWhite,
    });

    return (
        <div className={cx('bd-btn-circle-' + bg, 'flex justify-center items-center')}>
            <Comp className={classNameDefault} {..._props}>
                {children}
            </Comp>
        </div>
    );
}

export default ButtonCircle;
