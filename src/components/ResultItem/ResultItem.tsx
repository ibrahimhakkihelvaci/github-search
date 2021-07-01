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
	itemId: string
};

const ResultItem: FunctionComponent<ResultItemTypes> = ({ isRepo, title, description, avatar, itemId }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.icon}>
				<img src={avatar ? avatar : bookIcon} style={{ height: 24, width: 24 }} />
			</div>
			<div className={classes.content}>
				<Link
					to={`/${isRepo ? "repo-details" : "user-details"}/${isRepo ? itemId : title}`}
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
