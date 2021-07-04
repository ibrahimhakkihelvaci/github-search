import axios from "axios";

const base_url = "https://api.github.com";
const token = "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";
axios.defaults.headers.common["Authorization"] = `token ${token}`;

const requests = {
	getRepositories: (query) =>
		axios.get(`${base_url}/search/repositories?q=${query}`),
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
