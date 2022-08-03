import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import { ArrowCircleRightIcon } from '@heroicons/react/solid';

import styles from './search.module.scss';
import Button from '~/components/Button';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';

import { Wrapper as WrapperPopper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearch, setShowSearch] = useState(true);

    const debouceValue = useDebounce(searchValue, 300);

    useEffect(() => {
        if (!debouceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            const result = await searchServices.search(debouceValue);

            setSearchResult(result);
        };
        fetchApi();
    }, [debouceValue]);

    const renderData = () => {
        if (searchResult.length > 0)
            return searchResult.map((item) => (
                <Button
                    key={item.id}
                    href={item.url}
                    className={cx('', 'text-left block  hover:bg-gray-100 w-full pl-5 pt-4 pb-4  pr-5')}
                    target="_blank"
                >
                    {item.title}
                </Button>
            ));
    };

    const handleLoadSearch = (attrs) => {
        if (showSearch && searchResult.length > 0) {
            return (
                <div className={cx('search-popper', 'w-full')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>{renderData()}</WrapperPopper>
                </div>
            );
        } else return <></>;
    };

    const handleHideSearch = () => {
        setShowSearch(false);
    };

    return (
        <div
            className={cx(
                '',
                'flex justify-center items-center  w-full',
                'lg:h-1/2 md:h-1/3 sm:h-1/2 mobile-md:h-1/2',
                '',
            )}
        >
            <Tippy
                maxWidth={600}
                interactive
                placement="bottom"
                visible={showSearch && searchResult.length > 0}
                render={(attrs) => handleLoadSearch(attrs)}
                onClickOutside={handleHideSearch}
            >
                <input
                    className={cx(
                        'tp-bg-light tp-input',
                        '   rounded-md  text-gray-900 border-cyan-500 border  focus:bg-white',
                        'sm:text-xl md:text-2xl mobile-md:text-xl sm:h-8 mobile-md:h-6 sm:w-1/3 mobile-md:w-1/2',
                        'sm:p-9 mobile-md:p-6',
                    )}
                    placeholder="Nhập thông tin tìm kiếm...."
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => {
                        setShowSearch(true);
                    }}
                />
            </Tippy>
            <Button type="button">
                <ArrowCircleRightIcon
                    className={cx('tp-text-cyan', 'flex self-center   w-12 ', 'mobile-md:h-9  sm:h-12')}
                    aria-hidden="true"
                />
            </Button>
        </div>
    );
}

export default Search;
