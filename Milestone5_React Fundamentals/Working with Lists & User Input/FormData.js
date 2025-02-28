import React from 'react';
import {useState} from 'react';

const FormData = () => {
  const[list,setList] = useState([]);//the list that will store the data
  const[text,setText] = useState('');//the text from input field added to the list

  //function to add the text to the list and set the input field text to empty
  const handleAdd = () => {
    if(text.trim() !== '')
    {
      setList([...list, text]);
    }
    setText('');
  }

  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value) } 
      className="border-2 border-blue-900 p-2 rounded-md"/>
      <button className="bg-blue-900 text-white py-2 px-5 rounded-md text-center border" onClick={handleAdd}>Add</button>
      <ul className="list-disc list-inside">
        {list.map((text, index) => (
          <li key={index} className="text-lg text-grey-900">
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FormData;