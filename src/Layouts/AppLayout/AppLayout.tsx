import React, { FunctionComponent, useEffect, useState } from "react";
import { useHistory, useLocation, } from "react-router-dom";

//MUI Comps
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';

//Utils
import logo from "../../utils/images/company-logo.png";
import { useStyles } from "./styles";
import colors from '../../utils/colors'
//Routes
import MenuRoute from "../../Routes/MenuRoute/MenuRoute";

//Redux
import { connect } from 'react-redux';
import { get_repositories, get_users, filter_bookmarks } from '../../data/actions'
import { RepositoriesReducersProps, UsersReducersProps } from '../../data/reducers';

//Componentes
import EmptyPage from '../../Pages/EmptyPage'
import Loading from '../../components/Loading'

type AppLayoutProps = {
	get_repositories: (query: string) => void;
	get_users: (query: string) => void;
	filter_bookmarks: (searchQuery: string) => void;
	user_loading: boolean;
	repository_loading: boolean;
}

const AppLayout: FunctionComponent<AppLayoutProps> = (props) => {
	const classes = useStyles();
	const { children, get_repositories, get_users, user_loading, repository_loading, filter_bookmarks } = props;

	let history = useHistory()
	let location = useLocation()

	const searchStr = localStorage.getItem('searchStr')


	const [isSearched, setIsSearched] = useState(false)
	const [searchQuery, setSearchQuery] = useState(searchStr ? searchStr : '');

	const searchInGithub = () => {
		get_repositories(searchQuery)
		get_users(searchQuery)
	}


	const handleChange = (e: any) => {
		setSearchQuery(e.target.value)
	}

	const onSubmit = (e: any) => {
		if (e.key === 'Enter') {
			searchInGithub()
			filter_bookmarks(searchQuery)
			localStorage.setItem('searchStr', searchQuery)
			history.push(`/repositories`)
		}
	}

	useEffect(() => {
		if (searchQuery && location.pathname != '/') {
			searchInGithub()
			filter_bookmarks(searchQuery)
		}
	}, [])

	useEffect(() => {
		if (location.pathname == '/')
			setIsSearched(false)
		else
			setIsSearched(true)

	}, [location])

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<div className={classes.appBarContent}>
					<Toolbar>
						<img src={logo} className={classes.logo} onClick={() => history.push('/')} />
					</Toolbar>
					<div className={classes.search}  >
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search???'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
							onChange={handleChange}
							onKeyPress={(e) => onSubmit(e)}

						/>
					</div>
					<Button className={classes.bookmarkButton}
						startIcon={<BookmarkBorderSharpIcon />}
						onClick={() => history.push('/bookmarks')}
						style={location.pathname === "/bookmarks" ? { background: colors.light } : {}}>
						Bookmarks
					</Button>
				</div>

			</AppBar>

			{
				user_loading || repository_loading ? (
					<Loading />
				) : (
					<>
						{
							isSearched ? (
								<>
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

										</div>
									</Drawer>
									<main className={classes.content}>
										<Toolbar />
										{children}
									</main>
								</>
							) : (
								<div className={classes.emptyPage}>
									<EmptyPage />
								</div>
							)
						}
					</>
				)
			}

		</div>
	);
};

type reduxProps = {
	Users: UsersReducersProps;
	Repositiories: RepositoriesReducersProps;
};
const mapStateToProps = (state: reduxProps) => ({
	user_loading: state.Users.loading,
	repository_loading: state.Repositiories.loading
});

export default connect(mapStateToProps, { get_repositories, get_users, filter_bookmarks })(AppLayout);
