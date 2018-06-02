import React from 'react';
import './ResumeeContent.css';
import PropTypes from 'prop-types';


const ResumeeContent = (props) => (
        <div className="content">
          <div className="content-container">
            <h4><b>{props.title}</b></h4> 
           {props.children ? props.children : props.content}
          </div>
        </div>
);
ResumeeContent.propTypes = {
  children: PropTypes.node,
};
export default ResumeeContent;