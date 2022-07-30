import { Component } from "react";

export class TodoBanner extends Component {
    render = () => {
        return (<h4>todo list of {this.props.userName}
            ( {this.props.unDoneTaskCount} items to do)
        </h4>);
    }
} 