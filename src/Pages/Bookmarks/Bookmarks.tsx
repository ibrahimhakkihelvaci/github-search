import React, { FunctionComponent } from 'react'

//Redux
import { connect } from 'react-redux'
import { BookmarksReducersProps } from '../../data/reducers/bookmarksReducer'

//Components
import Results from '../../components/Results'

import { Repository } from '../../types'

type BookmarksProps = {
    bookmarks: any
}


const Bookmarks: FunctionComponent<BookmarksProps> = ({ bookmarks }) => {
    return (
        <Results isRepo={true} data={bookmarks} />
    )
}

type reduxProps = {
    Bookmarks: BookmarksReducersProps;
};
const mapStateToProps = (state: reduxProps) => ({
    bookmarks: state.Bookmarks
});


export default connect(mapStateToProps)(Bookmarks)