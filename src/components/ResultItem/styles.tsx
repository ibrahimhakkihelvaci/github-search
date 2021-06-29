import { makeStyles, fade } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "100%",
		height: 95,
		borderBottom: `1px solid ${colors.gray}`,
		position: "relative",
	},
	icon: {
		position: "absolute",
		top: 24,
		left: 0,
	},
	content: {
		padding: "24px 32px",
	},
	resultTitle: {
		fontSize: 20,
		color: colors.lightBlue,
	},
	resultDesc: {
		color: colors.black,
		fontSize: 16,
	},
}));

export { useStyles };
