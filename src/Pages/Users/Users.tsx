import React, { FunctionComponent } from 'react'

//Redux
import { connect } from 'react-redux'
import { UsersReducersProps } from '../../data/reducers/usersReducer'

//Components
import Results from '../../components/Results'

type UsersProps = {
    users: UsersReducersProps
}

const Users: FunctionComponent<UsersProps> = ({ users }) => {
    return (
        <Results data={users} />
    )
}

type reduxProps = {
    Users: UsersReducersProps
};
const mapStateToProps = (state: reduxProps) => ({
    users: state.Users
});


export default connect(mapStateToProps)(Users)