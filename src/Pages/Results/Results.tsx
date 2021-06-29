import React, { FunctionComponent } from "react";

//Components
import ResultItem from "../../components/ResultItem";

const Results: FunctionComponent = () => {
	return (
		<>
			<ResultItem isRepo={true} />
			<ResultItem isRepo={false} />
			<ResultItem isRepo={true} />
		</>
	);
};

export default Results;
