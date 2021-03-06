import React, { FunctionComponent } from "react";
import { useStyles } from "./styles";

//MUI Comps
import Typography from "@material-ui/core/Typography";

//Utils
import colors from "../../utils/colors";

type CustomListItemProps = {
	icon: string;
	text: string;
	count: number;
};

const CustomListItem: FunctionComponent<CustomListItemProps> = ({
	icon,
	text,
	count,
}) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.left}>
				{<img src={icon} />}
				<Typography className={classes.text} style={{ marginLeft: 8 }}>
					{text}
				</Typography>
			</div>
			<div className={classes.right}>
				<Typography
					className={classes.text}
					style={{ color: colors.lightBlue2, fontWeight: "bold" }}>
					{count}
				</Typography>
			</div>
		</div>
	);
};

export default CustomListItem;
