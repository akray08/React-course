import {useState} from 'react'

export default function TextForm(props)
{
    const handleUpClick = ()=>
    {
        //console.log("Upper case has been done")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handeleDownClick = () =>
    {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnchange =(event)=>{
       setText(event.target.value) 
    }
    const [text,setText] = useState("Enter what you want to change");
    return(
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea  className="form-control" value={text} onChange={handleOnchange} id="myBox" rows ="8">
                    </textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handeleDownClick}> Convert to Lowercase </button>
            </div>
        <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p> Total words read is {text.split(" ").length} and the characters are {text.length}</p>
        <p> You will need {text.split(" ").length*0.08} minutes to read the entire content </p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
        </>

    )
}
