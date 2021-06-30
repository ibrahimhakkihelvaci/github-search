import React, { FunctionComponent } from "react";

//Components
import ResultItem from "../../components/ResultItem";

type ResultsProps = {
	isRepo?: any;
};

const Results: FunctionComponent<ResultsProps> = ({ isRepo }) => {
	return (
		<>
			<ResultItem isRepo={isRepo} />
			<ResultItem isRepo={isRepo} />
			<ResultItem isRepo={isRepo} />
		</>
	);
};

export default Results;
