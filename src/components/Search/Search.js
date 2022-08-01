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
        <div className={cx('', 'flex justify-center items-center h-1/2 w-full')}>
            <Tippy
                maxWidth={500}
                interactive
                placement="bottom"
                visible={showSearch && searchResult.length > 0}
                render={(attrs) => handleLoadSearch(attrs)}
                onClickOutside={handleHideSearch}
            >
                <input
                    className={cx(
                        'tp-bg-light tp-input',
                        'h-8 p-9 w-1/3 rounded-md  text-gray-900 border-cyan-500 border  focus:bg-white',
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
                    className={cx('tp-text-cyan', 'flex self-center  h-12 w-12 ')}
                    aria-hidden="true"
                />
            </Button>
        </div>
    );
}

export default Search;
