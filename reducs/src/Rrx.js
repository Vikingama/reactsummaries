import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Rrx extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="junbotron-heading text-center">
                    {this.props.counter}
                </h1>
                <p className="text-center">
                    <button className="btn btn-primary mr-2">Increase</button>
                    <button className="btn btn-danger my-2">Decrease</button>
                </p>
            </div>
        );
    }
}

const mapStateTToProps = state => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateTToProps)(Rrx);

Rrx.propTypes = {
    counter: PropTypes.number.isRequired,
    // onIncrease: PropTypes.func.isRequired,
    // onDecrease: PropTypes.func.isRequired
};
