import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './TPButton.scss';

const cx = classNames.bind(styles);

function Button({ children, className, type, to, href, onClick, ...passProps }) {
    let Comp = 'button';
    let classNameDefault = cx(
        'tp-bg-dark',
        'btn-hover',
        'flex items-center h-16 py-9 p-5 ml-2  border-cyan-500  border rounded-lg  active:bg-black',
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
    if (className) {
        classNameDefault = className;
    }
    return (
        <Comp className={classNameDefault} {..._props}>
            {children}
        </Comp>
    );
}

export default Button;
