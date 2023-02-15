import fetchGithubUser from '../api/github/fetchGithubUser';

async function setGithubUser(username, setUserData, setUserExists) {
  const data = await fetchGithubUser(username);

  if (!data) {
    setUserExists(false);
    return;
  }

  setUserData(data);
  setUserExists(true);
}

export default setGithubUser;
