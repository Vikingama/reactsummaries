import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Rrx extends React.Component {
    render() {
        const { dispatch } = this.props;
        return (
            <div className="container">
                <h1 className="junbotron-heading text-center">
                    Rrx|{this.props.counter}
                </h1>
                <p className="text-center">
                    <button
                        className="btn btn-primary mr-2"
                        onClick={() => dispatch({ type: "INCREASE" })}
                    >
                        Increase
                    </button>
                    <button
                        className="btn btn-danger my-2"
                        onClick={() => dispatch({ type: "DECREASE" })}
                    >
                        Decrease
                    </button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateToProps)(Rrx);

Rrx.propTypes = {
    counter: PropTypes.number.isRequired
};
