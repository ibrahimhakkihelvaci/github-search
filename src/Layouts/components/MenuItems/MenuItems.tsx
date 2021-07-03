import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

//MUI Comps
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

//Redux
import { connect } from 'react-redux'
import { RepositoriesReducersProps } from '../../../data/reducers/repositoriesReducer';
import { UsersReducersProps } from '../../../data/reducers/usersReducer'

//Utils
import colors from '../../../utils/colors'


type MenuItemsProps = {
	user_count: number,
	repositiory_count: number
}

const MenuItems: FunctionComponent<MenuItemsProps> = ({ user_count, repositiory_count }) => {
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
		{ text: "Bookmarked", icon: <BookmarkBorderIcon />, count: 0 },
	];
	return (
		<>
			{menuItems.map((item) => (
				<Link to={`${item.link}`} style={{ textDecoration: "none", color: colors.black }}>
					<ListItem button key={item.text}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
						<ListItemSecondaryAction style={{ fontSize: 16, color: colors.black }}>
							{item.count}
						</ListItemSecondaryAction>
					</ListItem>
				</Link>
			))}
		</>
	);
};

type reduxProps = {
	Users: UsersReducersProps;
	Repositiories: RepositoriesReducersProps;
};
const mapStateToProps = (state: reduxProps) => ({
	user_count: state.Users.total_count,
	repositiory_count: state.Repositiories.total_count
});

export default connect(mapStateToProps)(MenuItems);
