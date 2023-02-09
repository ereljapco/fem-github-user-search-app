import iconSearch from '../assets/icons/icon-search.svg';

import '../assets/styles/searchform.css';

function SearchForm() {
  return (
    <form className="search-form">
      <img className="search-form__icon" src={iconSearch} alt="Search" />
      <input
        className="search-form__input"
        type="text"
        placeholder="Search GitHub username..."
      />
      <button className="search-form__btn">Search</button>
    </form>
  );
}

export default SearchForm;
