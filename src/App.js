import './App.css';

import {useState, useEffect} from "react";
import {BsTrash, BsBookmarkCheck, BsBookmarkeCheckFill} from "react-icons";

const API = "http://localhost:5000"

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState(""); 
  const [todos, setTodos] = useState([]);

  const [loading, setLoading] = useState(false);
  
  return (
    <div className="App">
      <div className='todos-header'>
        <h1>React Tarefas</h1>
      </div>
      <div className='form-todo'>
        <p>Formúlario</p>
      </div>
      <div className='list-todo'>
        <p>Listas</p>
      </div>
    </div>
  );
}

export default App;
