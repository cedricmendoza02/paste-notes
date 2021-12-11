import React from 'react';
import './titleinput.css';

function TitleInput(props) {
    return (
      <input 
        type="text" 
        value={props.value}
        placeholder="Enter title here..."
        onChange={props.onChange} />
    )
}

export default TitleInput;
