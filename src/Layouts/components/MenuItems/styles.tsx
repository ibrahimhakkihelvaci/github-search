import { makeStyles, fade } from "@material-ui/core/styles";
import colors from '../../../utils/colors'

const useStyles = makeStyles((theme) => ({
    menuItem: {

    },
    selectedMenuItem: {
        backgroundColor: colors.blue,
        color: `${colors.darkBlue} !important`
    },

}));

export { useStyles };
