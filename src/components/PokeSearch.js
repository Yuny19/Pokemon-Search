import { useState } from 'react';

const PokeSearch = ({ onSubmitKeyword }) => {
  const [keyword, setKeyword] = useState('');

  const keywordChangeHandler = (event) => {
    setKeyword(event.target.value);
  };

  const submitKeyword = (event) => {
    event.preventDefault();
    if (typeof onSubmitKeyword === 'function') {
      onSubmitKeyword(keyword);
    }
  };

  return (
    <div className='search__container'>
      <form onSubmit={submitKeyword} className='search__form-control'>
        <input
          name='keyword'
          id='keyword'
          value={keyword}
          onChange={keywordChangeHandler}
          placeholder='Pokemon Name'
          className='search__input'
        />
        <button type='submit' className='search__button'>
          Search
        </button>
      </form>
    </div>
  );
};

export default PokeSearch;
