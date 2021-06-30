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

const MenuItems: FunctionComponent = () => {
	const menuItems = [
		{
			text: "Repositories",
			icon: <InsertDriveFileIcon />,
			link: "/",
		},
		{
			text: "Users",
			icon: <InsertEmoticonIcon />,
			link: "/users",
		},
		{ text: "Bookmarked", icon: <BookmarkBorderIcon /> },
	];
	return (
		<>
			{menuItems.map((item) => (
				<Link to={`${item.link}`} style={{ textDecoration: "none" }}>
					<ListItem button key={item.text}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText primary={item.text} />
						<ListItemSecondaryAction style={{ fontSize: 16 }}>
							22
						</ListItemSecondaryAction>
					</ListItem>
				</Link>
			))}
		</>
	);
};

export default MenuItems;
