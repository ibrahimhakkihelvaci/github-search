import React, { FunctionComponent, useState, useEffect } from "react";

//Components
import CustomListItem from "../../../components/CustomListItem";

//Utils
import { useStyles } from "./styles";
import repoIcon from "../../../utils/images/book.png";
import colors from "../../../utils/colors";
import requests from "../../../utils/agent";

//MUI Comps
import Typography from "@material-ui/core/Typography";
import LinkIcon from "@material-ui/icons/Link";
import Button from '@material-ui/core/Button';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import Container from '@material-ui/core/Container';

//Icons
import eye from "../../../utils/images/eye-24.png";
import star from "../../../utils/images/star-24.png";
import fork from '../../../utils/images/git-fork-24.png'
import branches from '../../../utils/images/git-branch-24.png'
import issues from '../../../utils/images/issue-opened-24.png'
import pullRequests from '../../../utils/images/git-pull-request-24.png'

//Redux
import { connect } from 'react-redux'
import { RepositoryDetailsReducerProps, BookmarksReducersProps } from '../../../data/reducers'
import { add_bookmark, remove_bookmark } from '../../../data/actions'
import { Repository } from '../../../types'

type RepoDetailsProps = {
	repository: Repository,
	add_bookmark: (repository: any) => void
	remove_bookmark: (repoId: string) => void;
	bookmarks: Repository[]
	match: { params: { owner: string, name: string } };
}

const RepoDetails: FunctionComponent<RepoDetailsProps> = ({ repository, bookmarks, add_bookmark, remove_bookmark, match }) => {
	const classes = useStyles();
	const { subscribers_count, html_url, stargazers_count, open_issues, full_name, forks, description, id } = repository
	const { owner, name } = match.params;
	const [addedInBookmark, setAddenInBookmark] = useState(false)
	const [branchCount, setBranchcount] = useState(0)
	const [pullCount, setPullCount] = useState(0)

	const repoContentItems = [
		{
			icon: eye,
			text: "Watch",
			count: subscribers_count,
		},
		{
			icon: star,
			text: "Star",
			count: stargazers_count,
		},
		{
			icon: fork,
			text: "Fork",
			count: forks,
		},
	];

	const repoFooterItems = [
		{
			icon: branches,
			text: "Branches",
			count: branchCount,
		},
		{
			icon: issues,
			text: "Issues",
			count: open_issues,
		},
		{
			icon: pullRequests,
			text: "Pull Requests",
			count: pullCount,
		},
	];

	useEffect(() => {
		if (bookmarks && repository) {
			const isAdded = bookmarks.find((bookmark) => bookmark.id == id)
			if (isAdded)
				setAddenInBookmark(true)
			else
				setAddenInBookmark(false)
		}
	}, [bookmarks, repository])

	useEffect(() => {
		if (owner && name) {
			requests.getRepoBranches(owner, name).then((res) => {
				if (res.data)
					setBranchcount(res.data.length)
			})
			requests.getRepoPulls(owner, name).then((res) => {
				if (res.data)
					setPullCount(res.data.length)
			})
		}
	}, [owner, name])

	return (
		<div className={classes.container}>
			<div className={classes.repoHeader}>
				<img src={repoIcon} style={{ height: 64, width: 64 }} />
				<div className={classes.headerContent}>
					<Typography variant='h4' gutterBottom className={classes.repoTitle}>
						{full_name}
					</Typography>
					<Typography gutterBottom className={classes.repoDesc}>
						{description}
					</Typography>
					<a href={html_url} target="_blank" style={{ textDecoration: 'none' }}>
						<Typography gutterBottom className={classes.repoLink}>
							<LinkIcon style={{ color: colors.black, marginRight: 8 }} />
							{full_name}
						</Typography>
					</a>

				</div>
			</div>
			<div className={classes.repoContent}>
				{repoContentItems.map((item) => (
					<CustomListItem
						text={item.text}
						icon={item.icon}
						count={item.count}
					/>
				))}
			</div>
			<div className={classes.repoFooter}>
				{repoFooterItems.map((item) => (
					<CustomListItem
						text={item.text}
						icon={item.icon}
						count={item.count}
					/>
				))}
			</div>
			<div className={classes.bookmarkButton}>
				<Button
					variant="outlined"
					color="primary"
					startIcon={<BookmarkBorderSharpIcon />}
					className={addedInBookmark ? classes.removeBookmarkButton : classes.addBookmarkButton}
					onClick={() => addedInBookmark ? remove_bookmark(repository.id) : add_bookmark(repository)}>

					{addedInBookmark ? "Remove bookmark" : "Add to bookmark"}
				</Button>
			</div>
		</div>
	);
};

type reduxProps = {
	RepositoryDetail: RepositoryDetailsReducerProps;
	Bookmarks: BookmarksReducersProps;
};
const mapStateToProps = (state: reduxProps) => ({
	repository: state.RepositoryDetail.repository,
	bookmarks: state.Bookmarks.list
});

export default connect(mapStateToProps, { add_bookmark, remove_bookmark })(RepoDetails);
