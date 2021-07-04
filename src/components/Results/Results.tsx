import React, { FunctionComponent } from "react";

//MUI Comps
import Typography from "@material-ui/core/Typography";

//Components
import ResultItem from "../ResultItem";

//Utils
import { User, Repository } from '../../types'


type ResultsProps = {
	isRepo?: boolean;
	location?: string;
	data: {
		list: User[] | Repository[],
		total_count: number
	}
};

const Results: FunctionComponent<ResultsProps> = ({
	isRepo,
	data,
	location
}) => {

	const returnTitle = () => {
		if (location == '/users')
			return 'User Results'
		if (location == '/repositories')
			return 'Repository Results'
		else
			return 'Bookmarked Repository Results'
	}

	return (
		<>
			<div style={{ marginBottom: 18 }}>
				<Typography style={{ fontSize: 24 }}>
					{data.total_count} {returnTitle()}
				</Typography>
			</div>
			<div>
				{
					isRepo ? (
						data.list.map((item: any, index) => (
							<ResultItem key={index} isRepo={isRepo} ownerName={item.owner.login} title={item.name} description={item.description} />
						))
					) : (
						data.list.map((item: any, index) => (
							<ResultItem key={index} isRepo={isRepo} title={item.login} description={item.url} avatar={item.avatar_url} />
						))
					)
				}

			</div>
		</>
	);
};

export default Results;
