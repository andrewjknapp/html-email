import './App.css';
import {useState} from "react";

function App() {

  const [emailText, setEmailText] = useState("Please Enter Text");

  const handleTextChange = (e) => {
    setEmailText(e.target.value);
  }

  return (
    <div className="main">
      <textarea 
        className="text-entry"
        onChange={handleTextChange}
      ></textarea>
      <p className="display">{emailText}</p>
    </div>
  );
}

export default App;
