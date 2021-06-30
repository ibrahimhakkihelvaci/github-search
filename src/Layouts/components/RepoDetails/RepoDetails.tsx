import React from "react";

//Components
import CustomListItem from "../../../components/CustomListItem";

//Utils
import { useStyles } from "./styles";
import repoIcon from "../../../utils/images/book.png";
import colors from "../../../utils/colors";

//MUI Comps
import Typography from "@material-ui/core/Typography";
import LinkIcon from "@material-ui/icons/Link";

//Icons
import eye from "../../../utils/images/eye-24.png";
import star from "../../../utils/images/star-24.png";

const RepoDetails = () => {
	const classes = useStyles();

	const repoContentItems = [
		{
			icon: <img src={eye} />,
			text: "Watch",
			count: "2",
		},
		{
			icon: <img src={star} />,
			text: "Star",
			count: "2",
		},
		{
			icon: <img src={eye} />,
			text: "Watch",
			count: "2",
		},
	];

	return (
		<div className={classes.container}>
			<div className={classes.repoHeader}>
				<img src={repoIcon} style={{ height: 64, width: 64 }} />
				<div className={classes.headerContent}>
					<Typography variant='h4' gutterBottom className={classes.repoTitle}>
						airbnb/lottie-android
					</Typography>
					<Typography gutterBottom className={classes.repoDesc}>
						Render After Effects animations natively on Android and iOS, Web,
						and React Native
					</Typography>
					<Typography gutterBottom className={classes.repoLink}>
						<LinkIcon style={{ color: colors.black, marginRight: 8 }} />
						airbnb/lottie-android
					</Typography>
				</div>
			</div>
			<div className={classes.repoContent}>
				{repoContentItems.map((item) => (
					<CustomListItem
						text={item.text}
						icon={item.icon}
						count={item.count}
					/>
				))}
			</div>
			<div className={classes.repoFooter}>
				{repoContentItems.map((item) => (
					<CustomListItem
						text={item.text}
						icon={item.icon}
						count={item.count}
					/>
				))}
			</div>
		</div>
	);
};

export default RepoDetails;
