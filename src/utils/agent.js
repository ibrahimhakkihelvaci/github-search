import axios from "axios";

const base_url = "https://api.github.com";

const requests = {
	getRepositories: (query) =>
		axios.get(`${base_url}/search/repositories?q=${query}`),
	getUsers: (query) => axios.get(`${base_url}/search/users?q=${query}`),
	getUserByName: (userName) => axios.get(`${base_url}/users/${userName}`),
	getUserRepos: (userName) => axios.get(`${base_url}/users/${userName}/repos`),
};

export default requests;
