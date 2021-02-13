import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from "./components/TodoList"
import SaveTodo from "./components/SaveTodo"

function App() {
    const [formState, setFormState] = React.useState(true)
    const [saveState, setSaveState] = React.useState(false)
    const [todo, setTodo] = React.useState({
      title: "",
      date: "",
      description: "",
      status: "ToDo"
    })

    const resetTodo = () => {
      setTodo({
        title: "",
        date: "",
        description: "",
        status: "ToDo"
      })
    }
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar setFormState={setFormState} setSaveState={setSaveState}/>
            <br></br>
            <div className="container">
              {formState && <TodoForm  setFormState={setFormState} resetTodo={resetTodo} setSaveState={setSaveState} setTodo={setTodo} todo={todo}/>}
              {saveState && <SaveTodo setSaveState={setSaveState} todo={todo} resetTodo={resetTodo}/>}
              <br></br>
              <TodoList/>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
export default App;