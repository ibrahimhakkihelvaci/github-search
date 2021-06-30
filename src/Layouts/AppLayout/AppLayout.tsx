import React, { FunctionComponent } from "react";

//MUI Comps
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

//Utils
import logo from "../../utils/images/digieggs-logo.png";
import { useStyles } from "./styles";

//Routes
import MenuRoute from "../../Routes/MenuRoute/MenuRoute";

const AppLayout: FunctionComponent = (props) => {
	const classes = useStyles();

	const { children } = props;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<div className={classes.appBarContent}>
					<Toolbar>
						<img src={logo} className={classes.logo} />
					</Toolbar>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search…'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
				</div>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper,
				}}>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						<MenuRoute />
					</List>
					<Divider />
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				{children}
			</main>
		</div>
	);
};

export default AppLayout;
