import { useEffect } from 'react';
import fetchGithubUser from '../api/github/fetchGithubUser';
import iconSearch from '../assets/icons/icon-search.svg';

import '../assets/styles/searchform.css';
fetchGithubUser;

function SearchForm({ setUsername }) {
  async function searchUsername(e) {
    e.preventDefault();

    const username = document.querySelector('.search-form__input').value;

    setUsername(username);
  }

  return (
    <form className="search-form">
      <img className="search-form__icon" src={iconSearch} alt="Search" />
      <input
        className="search-form__input"
        type="text"
        placeholder="Search GitHub username..."
      />
      <button
        className="search-form__btn"
        onClick={(e) => {
          searchUsername(e);
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
