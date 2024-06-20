import { RepoType, ReposType } from '../types';

const host = 'http://localhost';
const port = 3003;

const apiURL = `${host}:${port}`;
export async function getRepo(id: string | number | undefined) {
  if (!id) throw new Error(`Value id cannot be ${id}`);
  const getRepoURL = `${apiURL}/repos/${id}`;
  try {
    const response = await fetch(getRepoURL);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    return result as RepoType;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getRepos(page: number, perPage: number) {
  const getReposURL = `${apiURL}/repos?page=${page}&per_page=${perPage}`;
  try {
    const response = await fetch(getReposURL);
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    return result as ReposType;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function sync() {
  const syncURL = `${apiURL}/polling/sync`;
  try {
    const response = await fetch(syncURL, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    return 'The data is synchronized';
  } catch (err) {
    console.log(err);
    return null;
  }
}

const client = { getRepo, getRepos, sync };
export default client;
