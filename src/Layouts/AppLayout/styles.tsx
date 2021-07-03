import { makeStyles, fade } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		backgroundColor: colors.white,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: colors.darkBlue,
		display: "flex",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: "42px 64px",
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: "#19417f",
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: 288,
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	logo: {
		width: 138,
		height: 21,
	},
	appBarContent: {
		display: "flex",
		alignItems: "center",
		width: "auto",
	},
	emptyPage: {
		height: '95vh',
		width: '100%',
	},
	bookmarkButton: {
		marginLeft: 32,
		color: "rgba(255, 255, 255, 0.87)",
		textTransform: "capitalize",
		fontSize: "1rem",
		"&:active": {
			background: "#557dbb",
		},
		"&:hover": {
			background: "#557dbb",
		},
	},
}));

export { useStyles };
