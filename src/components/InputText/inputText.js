import classNames from 'classnames/bind';

import styles from './InputText.module.scss';
const cx = classNames.bind(styles);

function InputText({ children, ref, value, id, title, type, tag, width, height, maxHeight, display, ...props }) {
    let _type = 'type';
    let Comp = 'input';
    if (type) {
        _type = type;
    }
    if (tag) {
        Comp = tag;
    }

    return (
        <>
            <fieldset className={cx('border border-cyan-400 rounded-lg bg-white w-full p-3 mb-4 ', maxHeight)}>
                <legend className="ml-7 -mb-4 p-1 text-md text-cyan-600">{title}</legend>
                {children}
                <Comp
                    ref={ref}
                    id={id}
                    type={_type}
                    className={cx(
                        'border h-full w-full p-2 bg-white outline-none border-none caret-cyan-400',
                        height,
                        display,
                    )}
                    placeholder="..."
                    value={value}
                    {...props}
                />
            </fieldset>
        </>
    );
}

export default InputText;
