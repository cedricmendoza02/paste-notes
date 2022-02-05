import React, { useState } from 'react';
import { Title, Button, TitleInput, ContentInput, NotesList} from './components';
import './App.css';

function App(props) {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [list, updateList] = useState([]);

  function handleChange(e) {
    let field = e.target.tagName; // get the target tagname
    // If it's not a textarea, then it's the input field for title
    document.querySelectorAll(".note-item")
      .forEach(item => {
        item.classList.remove("active")
      })
    field === "TEXTAREA" ?
      setContent(e.target.value) :
      setTitle(e.target.value);
  }

  function handleItemClick(title, e) {
    list.forEach(elem => {
      if(elem.title === title) {
        setTitle(elem.title);
        setContent(elem.content);
      }
    })
  }

  function handleSave(e) {
    e.preventDefault();
    const curList = list.slice(); // declare a local copy of list
    // Check if list already contains the title set
    let itemIndex = -1;
    list.some((elem, i) => {
      if(elem.title === title) {
        itemIndex = i;
        return true;
      }
      return false;
    })

    if(itemIndex > -1) {
      curList[itemIndex] = {title, content};
      updateList(curList);
      clearFields();
      return;
    }
    
    /* Following functional programming principles,
    declare a copy of the array without modifying the original array
    if the original array is modified directly, it won't trigger re-render of the component
    */
    curList.push({title, content}); // add the new item to the end of the list
    updateList(curList); // use the updateList method to update the state

    // empty the fields
    clearFields();
  }

  function handleDelete(e) {
    e.preventDefault();
    if(title === "") return;
    const curList = list.slice();
    let itemIndex = -1;
    list.some((elem, i) => {
      if(elem.title === title) {
        itemIndex = i;
        return true;
      }
      return false;
    })

    if(itemIndex > -1) {
      curList.splice(itemIndex, 1)
      updateList(curList);
      clearFields();
    }
  }
  
  function clearFields() {
    setTitle("")
    setContent("")
  }

  return (
    <div className="app-wrapper">
      <div className="app-wrapper-noteslist">
        <Title />
        <NotesList 
          list={list}
          onClick={handleItemClick}
          />
      </div>
      <form>
        <TitleInput 
          value={title}
          onChange={handleChange}/>
        <ContentInput 
          value={content}
          onChange={handleChange}/>
        <Button 
          value="Save"
          onClick={handleSave}/>
        <Button 
          value="Delete"
          onClick={handleDelete}/>
      </form>
    </div>
  )
}

export default App;