import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Background = styled.div`
    background-color: #eee;
    padding: 3px 15px;
    margin-bottom:15px;
`;

export default function NestedGrid() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={1}>
          <Grid item md={3}>
            <Background> 
            <div className="bg-grey">
              <h4> Showcase</h4>
              <p> Forward </p>
            </div>
            </Background>
          </Grid>
          <Grid item md={9}>
          <Background> 
            <div className="bg-grey">
              <h4> Graduate Computer Science @ Showcase University</h4>
              <div className={classes.demo}>
          </div>
              <p> August 2019- Present </p>
            </div>
            <List dense={dense}>
              
              <ListItem>
                <ListItemText
                  primary="Not all those who wander are lost"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Not all those who wander are lost"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>

              <ListItem>
                <ListItemText
                  primary="Not all those who wander are lost"
                  secondary={secondary ? 'Secondary text' : null}
                />
              </ListItem>
            
          </List>
          </Background>
          <Background > 
            <div className="bg-grey">
                <h4> Showcase</h4>
              <p> Random details </p>
            </div>
          </Background>
          </Grid>
      </Grid>
    </Container>
    </div>
  );
}
