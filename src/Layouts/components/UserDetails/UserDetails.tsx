import React from "react";

//MUI Comps
import Typography from "@material-ui/core/Typography";

//Utils
import { useStyles } from "./styles";
import userImage from "../../../utils/images/user-photo.png";
import colors from "../../../utils/colors";

const UserDetails = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<img src={userImage} />
			<div className={classes.content}>
				<Typography style={{ fontSize: 24 }}>İbrahim Helvacı</Typography>
				<Typography style={{ fontSize: 16, color: colors.gray2 }}>
					ibrahimhelvacı
				</Typography>
				<Typography style={{ fontSize: 16, marginTop: 16 }}>
					ibrahimhelvacı
				</Typography>
			</div>
		</div>
	);
};

export default UserDetails;
