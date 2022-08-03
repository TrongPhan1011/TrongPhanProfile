import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './TPButton.scss';

const cx = classNames.bind(styles);

function Button({ children, className, type, to, href, onClick, ...passProps }) {
    let Comp = 'button';
    let classNameDefault = cx(
        'tp-bg-dark',
        'btn-hover',
        'flex items-center h-16  ml-2  border-cyan-500  border rounded-lg  active:bg-black',
        'mobile-md:h-6 mobile-md:p-3 mobile-md:py-6 sm:py-9 sm:p-5',
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
        classNameDefault = cx(
            className,
            'flex items-center ',
            'md:p-4 sm:p-3 mobile-md:p-2 md:text-2xl sm:text-xl mobile-md:text-xl mobile-md:text-center',
        );
    }
    return (
        <Comp className={classNameDefault} {..._props}>
            {children}
        </Comp>
    );
}

export default Button;
