import { makeStyles, fade } from "@material-ui/core/styles";
import colors from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchImage: {
        width: 86,
        height: 86
    },
    text: {
        fontSize: 24,
        color: colors.turquoise
    }
}));

export { useStyles };
