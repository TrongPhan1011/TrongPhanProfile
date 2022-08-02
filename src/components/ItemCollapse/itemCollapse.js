import classNames from 'classnames/bind';

import styles from './ItemCollapse.module.scss';

const cx = classNames.bind(styles);

function ItemCollapse({ children, titleHeader, dataItems = [] }) {
    const renderContent = (itemInfo) => {
        return itemInfo.map((itemContent) => (
            <div key={'itemInfo-' + itemContent.idInfo}>
                <b>{itemContent.titleInfo}</b>{' '}
                {itemContent.contentInfo || (
                    <a
                        href={itemContent.linkProject}
                        className={cx('underline-offset-2  text-blue-700')}
                        target="_blanks"
                    >
                        {itemContent.linkTitle}
                    </a>
                )}
            </div>
        ));
    };

    const renderDataItemContent = () => {
        return dataItems.map((item) => (
            <div key={'item-' + item.idItem} className={cx('tp-bd-item', 'p-6 ')}>
                <div className={cx('flex justify-between text-3xl mb-5')}>
                    <b className={cx(item.titleColor)}>{item.title}</b>
                    <b>
                        <i>{item.titleTime}</i>
                    </b>
                </div>
                {renderContent(item.itemInfo)}
            </div>
        ));
    };

    return (
        <>
            <div className="collapse collapse-arrow ">
                <input type="checkbox" className="peer" />
                <div
                    className={cx(
                        'tp-bg-dark btn-hover',
                        ' text-white text-center w-full h-20  flex items-center justify-start border-white  border rounded-lg',
                        'active:bg-black collapse-title peer-checked:text-cyan-300 peer-checked:border-cyan-300',
                    )}
                >
                    {titleHeader}
                </div>
                <div className={cx('tp-bg-light', '  text-gray-800 collapse-content', 'peer-checked:p-6 ')}>
                    {renderDataItemContent()}
                    <div className={cx('tp-bd-item-temp', 'p-6 h-5')}></div>
                </div>
            </div>
        </>
    );
}

export default ItemCollapse;
