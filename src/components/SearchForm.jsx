import '../assets/styles/searchform.css';

import iconSearch from '../assets/icons/icon-search.svg';

function SearchForm({ searchUsername, username, userExists }) {
  return (
    <form className="search-form" onSubmit={(e) => searchUsername(e)}>
      <img className="search-form__icon" src={iconSearch} alt="Search" />
      <input
        className="search-form__input"
        type="text"
        name="username"
        placeholder="Search GitHub username..."
      />
      <button className="search-form__btn" type="submit">
        Search
      </button>
      {!username || !userExists ? (
        <p className="search-form__error-msg">No results</p>
      ) : (
        ''
      )}
    </form>
  );
}

export default SearchForm;
