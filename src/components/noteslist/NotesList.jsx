import React from 'react';
import './noteslist.css';

function NoteItem({title}) {

  return (
    <li 
      className="note-item">{title}</li>
  )
}

function NotesList({list, onClick}) {
  
    function handleClick(e) {
      document.querySelectorAll(".note-item")
      .forEach(item => {
        item.classList.remove("active")
      })
      e.target.classList.add("active");
      let title = e.target.innerHTML;
      onClick(title);
    }

    return (
      <ul 
        onClick={handleClick}
        className="notes-list-wrapper">
        {list.map(item => (
          <NoteItem 
            key={item.title} 
            title={item.title} 
            content={item.content} />
        ))}
      </ul>
    )
  }

export default NotesList;
