import React, { FunctionComponent } from 'react'
import { useStyles } from "./styles";

//MUI Comps
import Typography from "@material-ui/core/Typography";

//Utils
import searchIcon from '../../utils/images/search_desk.png'

const EmptyPage: FunctionComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <img src={searchIcon} className={classes.searchImage} />
                <Typography className={classes.text}  >
                    Search results will appear here
                </Typography>
            </div>
        </div>
    )
}


export default EmptyPage