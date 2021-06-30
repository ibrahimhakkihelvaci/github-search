import { makeStyles, fade } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
	container: {
		height: 55,
		width: "100%",
		borderBottom: `1px solid ${colors.gray}`,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	left: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	right: {},
	text: {
		fontSize: 20,
	},
}));

export { useStyles };
