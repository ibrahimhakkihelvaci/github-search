import React, { FunctionComponent } from 'react'
import { useStyles } from "./styles";

//MUI Comps
import Typography from "@material-ui/core/Typography";

//Utils
import bookmark from '../../../utils/images/bookmark.png'

//Redux
import { connect } from 'react-redux'
import { BookmarksReducersProps } from '../../../data/reducers/bookmarksReducer'

type BookmarksProps = {
    bookmarks_count: number
}

const Bookmarks: FunctionComponent<BookmarksProps> = ({ bookmarks_count }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={bookmark} style={{ width: 64, height: 64 }} />
            <div className={classes.content}>
                <Typography style={{ fontSize: 24 }}>
                    Bookmarks
                </Typography>
                <Typography gutterBottom style={{ fontSize: 16 }}>
                    You have {bookmarks_count} bookmarks
                </Typography>
            </div>
        </div>
    )
}

type reduxProps = {
    Bookmarks: BookmarksReducersProps;
};
const mapStateToProps = (state: reduxProps) => ({
    bookmarks_count: state.Bookmarks.total_count
});


export default connect(mapStateToProps)(Bookmarks)