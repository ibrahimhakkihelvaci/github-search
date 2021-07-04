import React, { FunctionComponent } from "react";

//Redux
import { connect } from 'react-redux'
import { get_repo_details } from '../../data/actions'
import { RepositoryDetailsReducerProps } from '../../data/reducers'

//MUI Comps
import Typography from "@material-ui/core/Typography";


type RepoDetailsProps = {
	get_repo_details: (username: string, repoName: string) => void;
	repositoryDescription: string
	match: { params: { owner: string, name: string } };
}

const RepoDetails: FunctionComponent<RepoDetailsProps> = ({ get_repo_details, match, repositoryDescription }) => {
	const { owner, name } = match.params;
	React.useEffect(() => {
		get_repo_details(owner, name)
	}, []);

	return (
		<Typography style={{ fontSize: 20 }}  >
			{repositoryDescription}
		</Typography>
	)
};

type reduxProps = {
	RepositoryDetail: RepositoryDetailsReducerProps;
};
const mapStateToProps = (state: reduxProps) => ({
	repositoryDescription: state.RepositoryDetail.repository.description,
});

export default connect(mapStateToProps, { get_repo_details })(RepoDetails);
