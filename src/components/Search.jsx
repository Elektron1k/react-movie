import { useState } from 'react';

function Search({ search }) {
  const [textSearch, setTextSearch] = useState('');
  const [radioSearch, setRadioSearch] = useState('all');

  function getSearch() {
    if (textSearch) {
      search(textSearch, radioSearch);
    }
  }

  function chengeRadio(e) {
    setRadioSearch(e.target.value);
    search(textSearch, e.target.value);
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={textSearch}
            onChange={(e) => {
              setTextSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                getSearch();
              }
            }}
          />
          <button
            className="btn orange darken-1 search-btn"
            onClick={getSearch}
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="all"
              checked={radioSearch === 'all'}
              onChange={chengeRadio}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              checked={radioSearch === 'movie'}
              onChange={chengeRadio}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              checked={radioSearch === 'series'}
              onChange={chengeRadio}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Search;
