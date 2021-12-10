import React,{ useState, useEffect} from 'react';
import './App.css';
import DropZone from './DropZone.js';
import HeaderInput from './HeaderInput.js';
import ColumnNames from './ColumnNames.js';
import ProgressBar from './progressBar';

function App() {
  const [isHeaders,setHeaders] = useState(''); //header's present or not
  const [options,setOptions] = useState(null); //columnNames
  const [isSubmited,setIsSubmited] = useState(false);
  const [timeToUpload, setTimeToUpload] = useState(Number.POSITIVE_INFINITE);
  const [progressPercentage,setProgressPercentage] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        {isSubmited ? "All Is Done :)" : "I Dont Know React :)"}
      </header>
      <ProgressBar  bgcolor={'#7CFC00'} completed={progressPercentage} timeToUpload={timeToUpload} />
      <div className="content">
        <h1>Drop Files Here</h1>
        <DropZone isHeaders={isHeaders} setOptions={setOptions} setTimeToUpload={setTimeToUpload} setProgress={setProgressPercentage} />
      </div>
      <div className="aboutFile">
          <div className="child">
            <h2>1) Does it Contain Headers</h2>
            <HeaderInput setHeaders={setHeaders}/>
          </div>
          <div className="child">
            <h2>2) Choose the column-name that Contains Text</h2>
            <ColumnNames options={options} isHeaders={isHeaders}/>
          </div>
      </div>
      <input type="submit" value="SUBMIT" className="submit" onClick={() => setIsSubmited(true)}/>
    </div>
  );
}

export default App;