import React, { useState } from 'react'

export default function TextUtils(props) {

    let handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase.","success");
    }
    let handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase.","success");
    }
    let handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard.","success");
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed","success");
    }
    let handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared.","success");
    }
    let handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");

    return (
        <>
            <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{background : props.mode==='light'?'white':'grey' , color : props.mode==='light'?'black':'white'}} id="myBox" onChange={handleOnChange} rows="8">{text}</textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-2">Convert to UpperCase</button>
                <button onClick={handleLoClick} className="btn btn-primary mx-2">Convert to LowerCase</button>
                <button onClick={handleCopy} className="btn btn-primary mx-2">Copy to clipboard</button>
                <button onClick={handleExtraSpace} className="btn btn-primary mx-2">Remove extra space</button>
                <button onClick={handleClear} className="btn btn-primary mx-2">Clear Text</button>
            </div>
            <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
                <h2 className='my-4'>Text Summary : </h2>
                <p>Word count : {text.split(" ").length}</p>
                <p>Character count : {(text.length - text.split(" ").length) + 1}</p>
                <p>{0.008 * ((text.length - text.split(" ").length) + 1)}</p>
            </div>
        </>
    )
}
