import { makeStyles, fade } from "@material-ui/core/styles";
import colors from "../../../utils/colors";

const useStyles = makeStyles((theme) => ({
	container: {
		paddingLeft: 46,
		padding: 34.5,
		height: "100%",
		width: "100%",
		boxSizing: "border-box",
	},
	repoHeader: {},
	headerContent: {
		paddingTop: 22,
	},
	repoTitle: {
		color: colors.lightBlue,
		fontSize: 24,
	},
	repoDesc: {
		fontSize: 16,
	},
	repoLink: {
		color: colors.lightBlue2,
		fontSize: 20,
		marginTop: 12,
		display: "flex",
		alignItems: "center",
	},
	repoContent: {
		marginTop: 25,
	},
	repoFooter: {
		marginTop: 32,
	},
	bookmarkButton: {
		marginTop: 32
	},
	addBookmarkButton: {
		width: "100%",
		height: "38px",
		color: colors.lightBlue2,
		textTransform: "capitalize",
		fontSize: "1rem",
		border: `1px solid ${colors.lightBlue2}`,
		borderRadius: "4px",
		"&:hover": {
			backgroundColor: colors.lightBlue2,
			color: colors.white,
		},
	},

	removeBookmarkButton: {
		width: "100%",
		height: "38px",
		color: colors.white,
		backgroundColor: colors.lightBlue2,
		textTransform: "capitalize",
		fontSize: "1rem",
		border: `1px solid ${colors.lightBlue2}`,
		borderRadius: "4px",
		"&:hover": {
			backgroundColor: colors.white,
			color: colors.lightBlue2,
		},
	},
}));

export { useStyles };
