import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

async function fetchGithubUser(username) {
  // if (!username) {
  //   username = 'octocat';
  // }

  try {
    const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_AUTH_KEY });
    const response = await octokit.request(`GET /users/${username}`, {
      username: username,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchGithubUser;
