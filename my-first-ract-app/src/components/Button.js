import React from 'react';
import '../css/button.css';

const Button = (props) => {
    const widthStyle = {
        width: props.width +'px'
      };
      
  return (
    <div className="button" style={widthStyle}>
      {props.text}
    </div>
  );
};
export default Button;
