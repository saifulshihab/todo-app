import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 0, 3),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
}));

export default useStyles;
