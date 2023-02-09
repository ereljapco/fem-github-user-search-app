import { useEffect, useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import Main from './layouts/Main';
import SearchForm from './components/SearchForm';
import getColorSheme from './layouts/Header/getColorScheme';
import switchTheme from './layouts/switchTheme';
import fetchGithubUser from './api/github/fetchGithubUser';

function App() {
  const [theme, setTheme] = useState(getColorSheme());
  const [user, setUser] = useState(null);

  useEffect(() => {
    switchTheme(theme);
  }, [theme]);

  useEffect(() => {
    setUser(fetchGithubUser(user));
  }, [user]);

  console.log(user);
  return (
    <div className="container">
      <Header theme={theme} setTheme={setTheme} />
      <Main>
        <SearchForm />
      </Main>
    </div>
  );
}

export default App;
