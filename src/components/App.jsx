import React, { useState } from "react";
import TodoItem from "./TodoItems";
import Heading from "./Heading";
import Button from "./Button";
import Input from "./input";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id){
    setItems(prevItems =>{
      return prevItems.filter((items , index) =>{
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <Input Change={handleChange} type="text" display={inputText} />
        <Button add={addItem}/>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index) => (
            <TodoItem 
            id = {index}
            key = {index}
            text={todoItem} 
            onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
