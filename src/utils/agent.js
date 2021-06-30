import axios from "axios";

const requests = {
	getRepositories: (query) =>
		axios.get(`https://api.github.com/search/repositories?q=${query}`),
};

export default requests;
