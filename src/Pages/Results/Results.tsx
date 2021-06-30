import React, { FunctionComponent } from "react";

//MUI Comps
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Components
import ResultItem from "../../components/ResultItem";

type ResultsProps = {
	isRepo?: any;
	isUserDetails?: Boolean;
};

const Results: FunctionComponent<ResultsProps> = ({
	isRepo,
	isUserDetails,
}) => {
	return (
		<>
			<div style={{ marginBottom: 18 }}>
				<Typography style={{ fontSize: 24 }}>
					{!isUserDetails ? (
						<>2,555 Repository Results</>
					) : (
						<>
							Repositories
							<Button
								variant='outlined'
								color='primary'
								size='small'
								style={{ marginLeft: 10 }}>
								64
							</Button>
						</>
					)}
				</Typography>
			</div>
			<div>
				<ResultItem isRepo={isRepo} />
				<ResultItem isRepo={isRepo} />
				<ResultItem isRepo={isRepo} />
			</div>
		</>
	);
};

export default Results;
