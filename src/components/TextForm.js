import React, {useState} from 'react'

export default function TextForm(props) {
    //function changed to uppercase
    const handleUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    //function changed to Lowercase
    const handleLoCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    //function to Clear text
    const handleClear = () =>{
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) =>{
        console.log("Onchange"); 
        setText(event.target.value);
    }

    const [text, setText] =  useState("");
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows='8'></textarea>
            <button className='btn btn-primary my-3' onClick={handleUpCase}>Convert to UpperCase</button>
            <button className='btn btn-primary my-3 mx-2' onClick={handleLoCase}>Convert to LowerCase</button>
            <button className='btn btn-primary my-3 mx-2' onClick={handleClear}>Clear text</button>
            </div>
        </div>
        <div className='container my-3'>
            <h1>Your Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
