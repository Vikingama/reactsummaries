import React, { Component } from "react";

export default class Accept extends Component {
    componentWillMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                {this.props.match.params.a} | {this.props.match.params.b}
            </div>
        );
    }
}
