import React from 'react';
import './contentinput.css';

function ContentInput(props) {  
    return (
      <textarea
        value={props.value}
        placeholder="Enter content here"
        onChange={props.onChange}>
      </textarea>
    )
  }

export default ContentInput;
