import { Octokit } from 'https://cdn.skypack.dev/@octokit/core';

async function fetchGithubUser(username) {
  try {
    const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_AUTH_KEY });
    const response = await octokit.request(`GET /users/${username}`, {
      username: username,
    });

    if (response.status == 200) {
      return response.data;
    }

    return;
  } catch (error) {
    // console.log(error);
  }
}

export default fetchGithubUser;
