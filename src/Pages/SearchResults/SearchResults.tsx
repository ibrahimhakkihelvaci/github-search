import React, { FunctionComponent } from 'react'
import { useHistory, useLocation, } from "react-router-dom";
import { Repository } from '../../types'

//Redux
import { connect } from 'react-redux'
import { UsersReducersProps } from '../../data/reducers/usersReducer'
import { BookmarksReducersProps } from '../../data/reducers/bookmarksReducer'
import { RepositoriesReducersProps } from '../../data/reducers/repositoriesReducer'


//Components
import Results from '../../components/Results'

type SearchResultsProps = {
    users: UsersReducersProps;
    bookmarks: BookmarksReducersProps
    repositiories: RepositoriesReducersProps
    isSearchBookmark?: boolean
}


const SearchResults: FunctionComponent<SearchResultsProps> = ({ users, bookmarks, repositiories }) => {
    let currentLocation = useLocation().pathname

    const returnCurrentData = () => {
        if (currentLocation == '/repositories')
            return {
                data: repositiories,
                isRepo: true
            }
        if (currentLocation == '/users')
            return {
                data: users,
                isRepo: false
            }
        if (currentLocation == '/search-bookmarks') {

            return {
                data: {
                    total_count: bookmarks.filteredBookmarks.length,
                    list: bookmarks.filteredBookmarks
                },
                isRepo: true
            }
        }
        else
            return {
                data: bookmarks,
                isRepo: true
            }
    }

    return (
        <Results location={currentLocation} isRepo={returnCurrentData().isRepo} data={returnCurrentData().data} />
    )
}

type reduxProps = {
    Users: UsersReducersProps
    Bookmarks: BookmarksReducersProps;
    Repositiories: RepositoriesReducersProps;
};
const mapStateToProps = (state: reduxProps) => ({
    users: state.Users,
    bookmarks: state.Bookmarks,
    repositiories: state.Repositiories
});


export default connect(mapStateToProps)(SearchResults)