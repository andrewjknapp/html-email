import './App.css';
import {useState, useEffect} from "react";
import ReactHtmlParser from "react-html-parser";

function App() {

  const [emailText, setEmailText] = useState("Please Enter Text");

  const handleTextChange = (e) => {
    setEmailText(e.target.value);
  }

  useEffect(() => {

  }, [emailText]);

  return (
    <main className="main">
      <article>
        <section>
          <textarea 
            className="text-entry"
            onChange={handleTextChange}
          ></textarea>
        </section>
        <section>
          <p className="display">{ReactHtmlParser(emailText)}</p> 
        </section>
      </article>
    </main>
  );
}

export default App;
