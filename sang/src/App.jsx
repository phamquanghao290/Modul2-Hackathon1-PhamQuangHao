import React, {useState}from 'react'
import Word from './components/Word'
import Letter from './components/Letter';
import Paragraph from './components/Paragraph';
import './App.css'
export default function () {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const wordCount = text.split(/\s+/).filter(word => word !== '').length;
  const paragraphCount = text.split(/\n/).filter(paragraph => paragraph.trim() !== '').length;
  return (
    <div>
      <h1 className='title'>Word Counter</h1><br /><br />
      <div className='contact'>
        <Word wordCount={wordCount}/>
        <Letter text={text}/>
        <Paragraph paragraphCount= {paragraphCount}/>
      </div><br /><br />
      <textarea
        name=""
        id=""
        cols="150"
        rows="20"
        value={text}
        onChange={handleTextChange}>
          
      </textarea><br />
      <div className="button">
        <button onClick={() => setText(text.toUpperCase())}>Click to Uppercase</button>
        <button onClick={() => setText(text.toLowerCase())}>Click to Lowercase</button>
      </div>
    </div>
  )
}

