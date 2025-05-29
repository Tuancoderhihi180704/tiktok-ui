import { useEffect, useState, useRef } from 'react';
import HeaderLessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Component/Popper';
import AccoutItem from '~/Component/AccoutItem';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as  searchService from '~/apiServices/searchService'
import { useDebounce } from '~/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowReSult] = useState(true);
  const [loading, setLoading] = useState(false);
  const forRef = useRef();

  const debounced = useDebounce(searchValue, 500);
  useEffect(() => {
    if (!debounced) {
      setSearchResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounced)
      setSearchResult(result);
      setLoading(false)
    }
    fetchApi()
  }, [debounced]);
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    forRef.current.focus();
  };
  const handleHideResult = () => {
    setShowReSult(false);
  };
  return (
    <HeaderLessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccoutItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={forRef}
          value={searchValue}
          placeholder="Search.........."
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowReSult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeaderLessTippy>
  );
}

export default Search;
