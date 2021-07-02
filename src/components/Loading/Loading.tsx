import React from 'react';

import { useStyles } from "./styles";

import BounceLoader from 'react-spinners/BounceLoader';


const Loading = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <BounceLoader />
        </div>
    )
}

export default Loading