import React from 'react';
import './noteslist.css';

function NotesList({list, onClick}) {

  const handleClick = (e) => {
    let title = e.target.textContent;
    onClick(title);
  }

  return (
    <div>
      <ul onClick={handleClick}>
        {list.map(({title},i) => <li key={i}>{title}</li>)}
      </ul>
      <button>Move up</button>
      <button>Move down</button>
    </div>
  )
}

export default NotesList;
