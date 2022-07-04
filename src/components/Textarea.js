
import React, { useState } from 'react';

export default function Textarea(props) {

    const handleOnChange=(e)=>{
     setText(e.target.value);   
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase.', 'success')
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase.', 'success')
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert('Texarea cleared.', 'success')
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed.', 'success');
    }
    const handleCopy=()=>{

       /*  var text=document.getElementById('textarea');
        text.select(); */
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard.', 'success');
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter text here!' value={text} onChange={handleOnChange} id="textarea" style={{backgroundColor: props.mode==='light'?'white':'#023e8a',
            color:props.mode==='light'?'black':'white'}} rows="6"></textarea>
            </div>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covert to Uppercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Covert to Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            
        </div>
        <div className='container mt-3' style={{color: props.mode==='light'?'black':'white'}}>
            <h5>Text Summary</h5>
            <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
            <h5>Preview</h5>
            <p>{text.length>0?text:'Enter something to preview it here.'}</p>
        </div>
        </>
        );
}
