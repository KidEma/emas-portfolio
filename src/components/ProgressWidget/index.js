import React from 'react';
import './ProgressWidget.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
     
    },
    colorPrimary: 'var(--highlight)',
    colorSecondary: 'var(--highlight-alt)'
  });

const ProgressWidget = (props) => (
        <div className="widget-container">
        <div className="widget-percentage">
        {props.value}%
        </div>
            <CircularProgress className={props.progress} 
                            style={{ color: 'var(--highlight)' }} 
                            size={100}
                            thickness={5}
                            variant="static" 
                            value={props.value} />
                            <div>{props.title}</div>
        </div>
);
ProgressWidget.propTypes = {
  children: PropTypes.node,
};
export default withStyles(styles)(ProgressWidget);