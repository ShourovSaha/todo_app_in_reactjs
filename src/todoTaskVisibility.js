import { Component } from "react";

export class TodoTaskVisibility extends Component {
    render = () => {
        return (<div className="form-check">
            <input className="form-check-input" type="checkbox"
                checked={this.props.isChecked}
                onChange={(event) => this.props.callback(event.target.checked)}
            />
            <label className="form-check-level">
                Show {this.props.TodoTaskVisibilityDescription}
            </label>
        </div>);
    }
}