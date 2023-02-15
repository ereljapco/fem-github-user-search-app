import { useEffect, useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import Main from './layouts/Main';
import SearchForm from './components/SearchForm';
import getColorSheme from './layouts/Header/getColorScheme';
import switchTheme from './layouts/switchTheme';
import GithubUser from './components/GithubUser';
import setGithubUserData from './utils/setGithubUserData';

function App() {
  const [theme, setTheme] = useState(getColorSheme());
  const [username, setUsername] = useState('octocat');
  const [userData, setUserData] = useState(null);
  const [userExists, setUserExists] = useState(true);

  useEffect(() => {
    switchTheme(theme);
  }, [theme]);

  useEffect(() => {
    setGithubUserData(username, setUserData, setUserExists);
  }, [username]);

  function searchUsername(e) {
    e.preventDefault();
    const searchInput = e.target.username.value;

    setUsername(searchInput);
  }

  return (
    <div className="container">
      <Header theme={theme} setTheme={setTheme} />
      <Main>
        <SearchForm
          searchUsername={searchUsername}
          username={username}
          userExists={userExists}
        />
        <GithubUser {...userData} />
      </Main>
    </div>
  );
}

export default App;
