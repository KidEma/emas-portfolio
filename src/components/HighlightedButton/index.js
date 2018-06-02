import React from 'react';
import './HighlightedButton.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    background: 'linear-gradient(45deg, var(--highlight-alt) 30%, var(--highlight) 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    margin: '15px',
    '&:hover': {
      opacity: '0.8'
    }
  },
};

const HighlightedButton = (props) => {
  return (
    <Button className={props.classes.button}
      title="Coming soon">
      {props.children ? props.children : 'Click me'}
    </Button>
  );

  HighlightedButton.propTypes = {
    children: PropTypes.node,
  };
}
export default withStyles(styles)(HighlightedButton);

