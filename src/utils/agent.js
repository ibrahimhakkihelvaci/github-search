import axios from "axios";

const base_url = "https://api.github.com";

const requests = {
	getRepos: (query) => axios.get(`${base_url}/search/repositories?q=${query}`),
	getUsers: (query) => axios.get(`${base_url}/search/users?q=${query}`),
	getUserByName: (userName) => axios.get(`${base_url}/users/${userName}`),
	getUserRepos: (userName) => axios.get(`${base_url}/users/${userName}/repos`),
	getRepoDetails: (owner, name) =>
		axios.get(`${base_url}/repos/${owner}/${name}`),
	getRepoBranches: (owner, name) =>
		axios.get(`${base_url}/repos/${owner}/${name}/branches`),
	getRepoPulls: (owner, name) =>
		axios.get(`${base_url}/repos/${owner}/${name}/pulls`),
};

export default requests;
