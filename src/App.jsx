import { useEffect, useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import Main from './layouts/Main';
import SearchForm from './components/SearchForm';
import getColorSheme from './layouts/Header/getColorScheme';
import switchTheme from './layouts/switchTheme';
import GithubUser from './components/GithubUser';
import fetchGithubUser from './api/github/fetchGithubUser';

function App() {
  const [theme, setTheme] = useState(getColorSheme());
  const [username, setUsername] = useState('octocat');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    switchTheme(theme);
  }, [theme]);

  useEffect(() => {
    async function fetchOcto() {
      const userData = await fetchGithubUser(username);
      setUserData(userData);
    }

    fetchOcto();
  }, [username]);

  return (
    <div className="container">
      <Header theme={theme} setTheme={setTheme} />
      <Main>
        <SearchForm setUsername={setUsername} setUserData={setUserData} />
        <GithubUser {...userData} />
      </Main>
    </div>
  );
}

export default App;
