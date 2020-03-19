import React, {useState} from "react";
import "./App.css";
import PictureContainer from './Components/PictureContainer'

function App() {
  const [date, setDate] = useState('');
  const [another, setAnother] = useState('')
  // const dateQuery = document.querySelector(".dateSearch");
  // console.log(dateQuery);
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <input id="form" type="date" placeholder='search' onChange={(e) => setAnother(e.target.value)} value={another}/>
      <button type="button" onClick={() => setDate(another)}>Submit</button>
      <PictureContainer date={date}/>
    </div>
  );
}

export default App;


