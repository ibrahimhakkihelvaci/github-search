import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

//Styles
import { useStyles } from "./styles";

//Utils
import bookIcon from "../../utils/images/book-icon.png";

type ResultItemTypes = {
	isRepo?: boolean;
	avatar?: string
	title: string,
	description: string,
	ownerName?: string,
};

const ResultItem: FunctionComponent<ResultItemTypes> = ({ isRepo, title, description, avatar, ownerName }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.icon}>
				<img src={!isRepo ? avatar : bookIcon} style={{ height: 24, width: 24, borderRadius: !isRepo ? '50%' : '0' }} />
			</div>
			<div className={classes.content}>
				<Link
					to={!isRepo ? `/user-details/${title}` : `/repo-details/${ownerName}/${title}`}
					style={{ textDecoration: "none" }}>
					<div className={classes.resultTitle}>{title}</div>
				</Link>
				<div className={classes.resultDesc}>
					{description}
				</div>
			</div>
		</div>
	);
};
export default ResultItem;
