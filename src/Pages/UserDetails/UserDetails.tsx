import React, { FunctionComponent, useState } from "react";

//MUI Comps
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//Components
import ResultItem from '../../components/ResultItem'

//Utils
import requests from '../../utils/agent'
import { useEffect } from "react";

type UserDetailsProps = {
    match: { params: { id: number } };
};

const UserDetails: FunctionComponent<UserDetailsProps> = ({ match }) => {
    const [userRepos, setUserRepos] = useState<any>(null)
    const { id } = match.params;

    const getUserRepos = async () => {
        try {
            const res = await requests.getUserRepos(id)
            setUserRepos(res.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id) {
            getUserRepos()
        }
    }, [])

    return (
        <>
            <div style={{ marginBottom: 18 }}>
                <Typography style={{ fontSize: 24 }}>
                    Repositories
                    <Button
                        variant='outlined'
                        color='primary'
                        size='small'
                        style={{ marginLeft: 10 }}>
                        {userRepos && userRepos.length}
                    </Button>
                </Typography>
            </div>
            <div>
                {
                    userRepos && userRepos.map((item: any) => (
                        <ResultItem isRepo={true} title={item.name} description={item.description} itemId={item.id} ownerName={item.owner.login} />
                    ))
                }
            </div>
        </>
    );
};

export default UserDetails;
