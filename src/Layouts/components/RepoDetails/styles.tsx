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
		color: "#2c98f0",
		textTransform: "capitalize",
		fontSize: "1rem",
		border: "1px solid #2c98f0",
		borderRadius: "4px",
		"&:hover": {
			backgroundColor: "#2c98f0",
			color: "#ffffff",
		},
	},

	removeBookmarkButton: {
		width: "268px",
		height: "38px",
		color: "#ffffff",
		backgroundColor: "#2c98f0",
		textTransform: "capitalize",
		fontSize: "1rem",
		border: "1px solid #2c98f0",
		borderRadius: "4px",
		"&:hover": {
			backgroundColor: "#ffffff",
			color: "#2c98f0",
		},
	},
}));

export { useStyles };
