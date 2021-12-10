import React, {useState} from 'react';


function DropZone({isHeaders,setOptions,setTimeToUpload,setProgress}){
    
    const [highlighted, setHighlighted] = useState(false);
    function onFileDrop(e){
        e.preventDefault();
        setHighlighted(false);
        setProgress(100);
        setTimeToUpload(e.view.performance.timing.loadEventEnd - e.view.performance.timing.loadEventStart);
        Array.from(e.dataTransfer.files).filter((file) => file.type === "text/csv").forEach(async (file) => {
            const text = await file.text();
            setOptions(text);
        })
    }

    return (
        <div className={`drop-container ${highlighted ? 'fileDrag' : 'fileDrop' }`}
            onDragEnter={()=>{
                setHighlighted(true);
            }}
            onDragOver = {(e) => {e.preventDefault()}}
            onDrop = {(e) => {onFileDrop(e)}}>
            <p>
            +</p>
        </div>
    );
}

export default DropZone;