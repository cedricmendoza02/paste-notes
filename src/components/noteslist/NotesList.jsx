import React, { useState } from 'react';
import './noteslist.css';

function NoteItem({title, content, onClick}) {
  return (
    <li 
      className="note-item" 
      onClick={onClick}>{title}</li>
  )
}

function NotesList({list, onClick}) {
    return (
      <ul className="notes-list-wrapper">
        {list.map(item => (
          <NoteItem 
            key={item.title} 
            title={item.title} 
            content={item.content}
            onClick={(e) => onClick(item, e)} />
        ))}
      </ul>
    )
  }

export default NotesList;
