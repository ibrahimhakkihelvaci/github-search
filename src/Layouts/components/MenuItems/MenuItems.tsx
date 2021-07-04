import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { useHistory, useLocation, } from "react-router-dom";

//MUI Comps
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";

//Redux
import { connect } from 'react-redux'
import { RepositoriesReducersProps, UsersReducersProps, BookmarksReducersProps } from '../../../data/reducers';

//Utils
import colors from '../../../utils/colors'


type MenuItemsProps = {
	user_count: number,
	repositiory_count: number,
	bookmark_count: number
}

const MenuItems: FunctionComponent<MenuItemsProps> = ({ user_count, repositiory_count, bookmark_count }) => {

	const classes = useStyles()
	let location = useLocation()

	const menuItems = [
		{
			text: "Repositories",
			icon: <InsertDriveFileIcon />,
			link: "/repositories",
			count: repositiory_count
		},
		{
			text: "Users",
			icon: <InsertEmoticonIcon />,
			link: "/users",
			count: user_count
		},
		{
			text: "Bookmarked",
			icon: <BookmarkBorderIcon />,
			link: "/search-bookmarks",
			count: bookmark_count
		},
	];
	return (
		<>
			{menuItems.map((item, index) => (
				<Link to={`${item.link}`} style={{ textDecoration: "none", color: colors.black }}>
					<ListItem button key={index} className={location.pathname == item.link ? classes.selectedMenuItem : classes.menuItem}>
						<ListItemIcon
							style={{ color: location.pathname == item.link ? colors.darkBlue : colors.lightGray }}
						>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
						<ListItemSecondaryAction style={{ fontSize: 16, color: location.pathname == item.link ? colors.darkBlue : colors.lightGray }}>
							{item.count}
						</ListItemSecondaryAction>
					</ListItem>
				</Link>

			))}
			<Divider />
		</>
	);
};

type reduxProps = {
	Users: UsersReducersProps;
	Repositiories: RepositoriesReducersProps;
	Bookmarks: BookmarksReducersProps
};
const mapStateToProps = (state: reduxProps) => ({
	user_count: state.Users.total_count,
	repositiory_count: state.Repositiories.total_count,
	bookmark_count: state.Bookmarks.filteredBookmarks.length
});

export default connect(mapStateToProps)(MenuItems);
