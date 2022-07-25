import { Component } from "react";

export class TodoBanner extends Component {
    render = () => {
        <h4>todo list of {this.state.userName}
            ({this.state.todoItems.filter(t => !t.isDone).length} items to do)
        </h4>
    }
}