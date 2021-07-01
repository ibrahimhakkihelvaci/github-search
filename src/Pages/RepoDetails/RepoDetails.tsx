import React, { FunctionComponent } from "react";

//Redux
import { connect } from 'react-redux'
import { get_repo_details } from '../../data/actions'

type RepoDetailsProps = {
	get_repo_details: (username: string, repoName: string) => void;
}

const RepoDetails: FunctionComponent<RepoDetailsProps> = ({ get_repo_details }) => {
	React.useEffect(() => {
		get_repo_details("d", "dsad")
	}, [])
	return <p>Repo Details</p>;
};

export default connect(null, { get_repo_details })(RepoDetails);
