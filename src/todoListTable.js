import { Component } from "react";

export class TodoListTable extends Component {
    render = () => {
        return (<tr key={this.props.action}>
            <td>{this.props.item.action}</td>
            <td>
                <input type="checkbox" checked={this.props.item.isDone} onChange={() => this.props.callback(this.props.item)} />
            </td>
        </tr>);
    }   
}