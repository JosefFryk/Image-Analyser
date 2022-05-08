import React, { useState } from 'react';
import './App.css';
import { computerVision, isConfigured as ComputerVisionIsConfigured } from './azure';
import Info from './components/Info/Info'
import Rectangle from "./components/Rectangle"
import Text from './components/Text'


function App() {

  const [fileSelected, setFileSelected] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [processing, setProcessing] = useState(false);
 
  
  const handleChange = (e) => {
    setFileSelected(e.target.value)
  }
  const onFileUrlEntered = (e) => {

    // hold UI
    setProcessing(true);
    setAnalysis(null);

    computerVision(fileSelected || null).then((item) => {
      // reset state/form
      setAnalysis(item);
      setFileSelected("");
      setProcessing(false);
     
    });

  };
  const info = analysis
  const textImage = RenderText()
 
  // Display JSON data in readable format
  // const PrettyPrintJson = (data) => {
  //   return (<div><pre>{JSON.stringify(data, null, 4)}</pre></div>);
  // }
  
  //img + rectangle + json for now
  const DisplayResults = () => {
    return (
      <div>
        <div className='wrapper'>
          <img src={analysis.URL} className="exampleImg" border="1" alt={(analysis.description && analysis.description.captions && analysis.description.captions[0].text ? analysis.description.captions[0].text : "can't find caption")} />
          {info.objects.length > 0 && RenderRectangle()}
        </div>
        
        <>
      
        </>
       
        {/* {PrettyPrintJson(analysis)} */}
      </div>
    )
  };
  



  const Analyze = () => {
    return (
    <div>
      {analysis && DisplayResults()}
      <h1>Analyze image</h1>
      {!processing &&
        <div>
          <div>
            <label>URL</label>
            <input type="text" placeholder="Enter URL or leave empty for random image from collection" size="50" onChange={handleChange}></input>
          </div>
          <button onClick={onFileUrlEntered}>Analyze</button>
        </div>
      }
      {processing && <div>Processing</div>}
      <hr />
      
      </div>
    )
  }
  
  const CantAnalyze = () => {
    return (
      <div>Key and/or endpoint not configured in ./azure.js</div>
    )
  }
   
  function Render() {
    const ready = ComputerVisionIsConfigured();
    if (ready) {
      return <Analyze />;        
    }
    return <CantAnalyze />;
  }

  function RenderInfo() {

    if (analysis !== null) {
      return  <Info
      info={info}
      text = {textImage}
      
    />
      
    }
    return 
  }
  function RenderRectangle() {

    if (analysis !== null) {
      return  <Rectangle
      text={info.objects.map((e) => {
        return e.object
      } )}
      info={info.objects.map((e) => {
        return e.rectangle
      } )}
    />
    }
    return 
  }

  function RenderText() {

    if (analysis !== null) {
      return  <Text
      text={info.text.readResults.map((e) => {
        return e.lines
      
     
      })}
      />
    
    }
    return 
  }
 


  return (
  <div>
   
     {Render()}
    {RenderInfo()}
   

   
  </div>
  );
}

export default App;