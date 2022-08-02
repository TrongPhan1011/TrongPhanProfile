import { Fragment } from 'react';

import classNames from 'classnames/bind';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('tp-bg-header', 'flex justify-around items-center h-20 w-full fixed z-10')}>
            <Button
                to={config.routeConfig.home}
                className={cx('text-logo', 'text-gradient tp-font-logo', ' flex w-1/5 bg-slate-50 pl-28')}
            >
                TP
            </Button>
            <div className={cx('', 'w-4/5 flex justify-end pr-20')}>
                <Button to={config.routeConfig.home} className={cx('tp-link-hover', 'text-white  p-5 ')}>
                    Trang chủ
                </Button>
                <Button to={config.routeConfig.gioiThieu} className={cx('tp-link-hover', 'text-white  p-5 ')}>
                    Giới thiệu
                </Button>
                {/* <Button to={config.routeConfig.sanPham} className={cx('tp-link-hover', 'text-white  p-5 ')}>
                    Sản phẩm
                </Button> */}

                <Menu as="div" className=" relative inline-block text-left">
                    <div>
                        <Menu.Button className={cx('tp-link-hover', 'inline-flex text-white  p-5 ')}>
                            Ứng dụng
                            <ChevronDownIcon className="flex self-center mr-1 ml-2 h-8 w-8" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className={cx(
                                'tp-bg-light',
                                'origin-top-left absolute   w-80 right-0 rounded-sm shadow-lg  shadow-md ',
                            )}
                        >
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Button
                                            to={config.routeConfig.qrCode}
                                            className={cx(
                                                active ? 'btn-hover' : 'text-gray-700',
                                                'block px-4 py-2 text-md',
                                                'tp-link-hover',
                                            )}
                                        >
                                            Tạo QR Code
                                        </Button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Button
                                            to={config.routeConfig.chuyenFile}
                                            className={cx(
                                                active ? 'btn-hover' : 'text-gray-700',
                                                'block px-4 py-2 text-md',
                                                'tp-link-hover',
                                            )}
                                        >
                                            Chuyển đổi file
                                        </Button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
}

export default Header;
