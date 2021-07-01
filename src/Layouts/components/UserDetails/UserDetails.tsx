import React, { useEffect, useState, FunctionComponent } from "react";

//MUI Comps
import Typography from "@material-ui/core/Typography";

//Utils
import { useStyles } from "./styles";
import colors from "../../../utils/colors";
import requests from '../../../utils/agent'

type UserDetailsProps = {
	match: { params: { id: number } };
}

const UserDetails: FunctionComponent<UserDetailsProps> = ({ match }) => {
	const classes = useStyles();
	const { id } = match.params;

	const [user, setUser] = useState<any>(null)

	const getUserDetails = async () => {
		try {
			const res = await requests.getUserByName(id)
			setUser(res.data)

		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (id) {
			getUserDetails()
		}
	}, [])

	return (
		user && (
			<div className={classes.container}>
				<img src={user.avatar_url} style={{ width: 206, height: 206, borderRadius: '50%' }} />
				<div className={classes.content}>
					<Typography style={{ fontSize: 24 }}> {user.name} </Typography>
					<Typography style={{ fontSize: 16, color: colors.gray2 }}>
						{user.login}
					</Typography>
					<Typography style={{ fontSize: 16, marginTop: 16 }}>
						{user.company}
					</Typography>
				</div>
			</div>
		)
	);
};

export default UserDetails;
