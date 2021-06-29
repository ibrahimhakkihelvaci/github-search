import React, { FunctionComponent } from "react";

//Styles
import { useStyles } from "./styles";

//Utils
import bookIcon from "../../utils/images/book-icon.png";
import avatar from "../../utils/images/avatar.png";

type ResultItemTypes = {
	isRepo?: boolean;
};

const ResultItem: FunctionComponent<ResultItemTypes> = ({ isRepo }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.icon}>
				<img src={isRepo ? bookIcon : avatar} />
			</div>
			<div className={classes.content}>
				<div className={classes.resultTitle}>Test Deneme Projesi</div>
				<div className={classes.resultDesc}>
					Test Deneme ProjesiTest Deneme ProjesiTest Deneme Projesi
				</div>
			</div>
		</div>
	);
};
export default ResultItem;
