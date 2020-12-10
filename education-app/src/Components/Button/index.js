import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Buttons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant={props.variant} color={props.color} className={classes.button} name={props.name} onClick={props.onClick}>
        {props.children}
      </Button>
    </div>
  );
}

Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);