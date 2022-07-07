// import logo from './logo.svg';
// import './App.css';

import { Component } from "react";

// function App() {
//   return (
//     <div className="bg-primary text-white text-center p-2">
//       <h4>todo list</h4>
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Adama",
      todoItems: [
        { action: "Do excrcise", isDone: false },
        { action: "Do breakfast", isDone: false },
        { action: "Do Study", isDone: false },
        { action: "Prepare for work", isDone: true },
        { action: "Movie watch", isDone: false }
      ],
      newItemText: ""
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  }

  createNewTodoIteam = () => {
    if (!this.state.todoItems
      .find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems,
        { action: this.state.newItemText, isDone: false }],
        newItemText: ""
      })
    }
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Adam" : "Bob"
    })
  }

  togolTodo = (todoItem) => this.setState(
    {
      todoItem: this.state.todoItems
        .map(item => item.action === todoItem.action ?
          { ...item, isDone: !item.isDone } : item)
    }
  );

  todoTableRows = () => this.state.todoItems.map(item =>
    <tr key={item.action}>
      <td>{item.action}</td>
      <td>
        <input type="checkbox" checked={item.isDone} onChange={this.togolTodo(item)}>

        </input>
      </td>
    </tr>
  );


  render = () =>
    <div>
      <div className="bg-primary text-white text-center p-2">
        <h4>todo list of {this.state.userName}</h4>
        ({this.state.todoItems.filter(t => !t.isDone).length} items to do)
      </div>

      <div className="container-fluid">
        <div className="my-1">
          <input className="form-control"
            value={this.state.newItemText}
            onChange={this.updateNewTextValue}
          />
          <button className="btn btn-primary mt-1"
            onClick={this.createNewTodoIteam}>
            Add
          </button>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Task description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {this.todoTableRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
}