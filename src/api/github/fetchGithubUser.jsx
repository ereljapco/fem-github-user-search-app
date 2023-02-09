async function fetchGithubUser(user) {
  if (!user) {
    user = 'octocat';
  }
  const url = `https://api.github.com/users/${user}/`;

  const response = await fetch(url);
  console.log(response);
}

export default fetchGithubUser;
