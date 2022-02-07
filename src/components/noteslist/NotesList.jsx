import React from 'react';
import './noteslist.css';

function NotesList({list, onClick, moveUp, moveDown}) {

  const handleClick = (e) => {
    let title = e.target.textContent;
    onClick(title);
  }

  return (
    <div>
      <ul onClick={handleClick}>
        {list.map(({title},i) => <li key={i}>{title}</li>)}
      </ul>
      <button onClick={moveUp}>Move up</button>
      <button onClick={moveDown}>Move down</button>
    </div>
  )
}

export default NotesList;
