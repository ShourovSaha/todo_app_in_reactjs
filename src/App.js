import { Component } from "react";
import { TodoBanner } from "./todoBanner";
import { TodoListTable } from "./todoListTable";
import { TodoCreator } from "./todoCreator";
import {TodoTaskVisibility} from "./todoTaskVisibility";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Adam",
      todoItems: [
        { action: "Do excrcise", isDone: false },
        { action: "Do breakfast", isDone: false },
        { action: "Do Study", isDone: false },
        { action: "Prepare for work", isDone: true },
        { action: "Movie watch", isDone: false }
      ],
      showCompletedTodo: true
    }
  }

  createNewTodoIteam = (todoTask) => {
    if (!this.state.todoItems
      .find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems,
        { action: todoTask, isDone: false }]
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
      todoItems: this.state.todoItems
        .map(item => item.action === todoItem.action ?
          { ...item, isDone: !item.isDone } : item)
    }
  );

  todoTableRows = () => this.state.todoItems.map(item =>
    <TodoListTable item={item} callback={this.togolTodo} />
  );


  render = () =>
    <div>
      <div className="bg-primary text-white text-center p-2">
        <TodoBanner userName={this.state.userName} todoItems={this.state.todoItems} />
      </div>

      <div className="container-fluid">
        <TodoCreator callback={this.createNewTodoIteam} />
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
        <div>
          <TodoTaskVisibility TodoTaskVisibilityDescription = "Completed Task"
            isChecked = {this.state.showCompletedTodo}
            callback = {(check) => this.setState({showCompletedTodo: check})}
          />
        </div>
        {
          this.state.showCompletedTodo &&
          <table className="table table-striped table-bordared">
            <thead>
              <tr>
                <th>Descriptoin</th> <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {this.todoTableRows()}
            </tbody>
          </table>
        }
      </div>
    </div>
}