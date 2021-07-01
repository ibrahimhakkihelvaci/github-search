import React, { FunctionComponent } from "react";

//MUI Comps
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Components
import ResultItem from "../../components/ResultItem";


type ResultsProps = {
	isRepo?: any;
	isUserDetails?: Boolean;
	data: {
		list: any,
		total_count: number
	}
};

const Results: FunctionComponent<ResultsProps> = ({
	isRepo,
	isUserDetails,
	data
}) => {
	return (
		<>
			<div style={{ marginBottom: 18 }}>
				<Typography style={{ fontSize: 24 }}>
					{!isUserDetails ? (
						<>{data.total_count} Repository Results</>
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
				{
					isRepo ? (
						data.list.map((item: any) => (
							<ResultItem isRepo={isRepo} ownerName={item.owner.login} title={item.name} description={item.description} itemId={item.id} />
						))
					) : (
						data.list.map((item: any) => (
							<ResultItem isRepo={isRepo} title={item.login} description={item.url} avatar={item.avatar_url} itemId={item.id} />
						))
					)
				}

			</div>
		</>
	);
};

export default Results;
