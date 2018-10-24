import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="junbotron-heading text-center">
                    {this.props.value.counter}
                </h1>
                <p className="text-center">
                    <button
                        className="btn btn-primary mr-2"
                        onClick={this.props.onIncrease}
                    >
                        Increase
                    </button>
                    <button
                        className="btn btn-danger my-2"
                        onClick={this.props.onDecrease}
                    >
                        Decrease
                    </button>
                </p>
            </div>
        );
    }
}

App.propTypes = {
    value: PropTypes.object.isRequired,
    onIncrease: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired
};

export default App;
