import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Create } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Create className={classes.icon} />
          <Typography variant="h6">ToDo-Liste</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Aufgaben
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Willkommen auf deiner ToDo-Liste!
            </Typography>
          </Container>
        </div>

        <div className={classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Delete
              </Button>
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
};

export default App;
