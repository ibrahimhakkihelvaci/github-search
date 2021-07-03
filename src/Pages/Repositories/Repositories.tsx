import React, { FunctionComponent } from 'react'

//Redux
import { connect } from 'react-redux'
import { RepositoriesReducersProps } from '../../data/reducers/repositoriesReducer'

//Components
import Results from '../../components/Results'


type RepositoriesProps = {
    repositiories: RepositoriesReducersProps
}

const Repositories: FunctionComponent<RepositoriesProps> = ({ repositiories }) => {
    return (
        <Results isRepo={true} data={repositiories} />
    )
}


type reduxProps = {
    Repositiories: RepositoriesReducersProps;
};
const mapStateToProps = (state: reduxProps) => ({
    repositiories: state.Repositiories
});

export default connect(mapStateToProps)(Repositories)