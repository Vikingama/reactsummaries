import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increament, decreament } from "./actions";

class Rtx extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="junbotron-heading text-center">
                    Rtx|
                    {this.props.counter}
                </h1>
                <p className="text-center">
                    <button
                        className="btn btn-primary mr-2"
                        onClick={this.props.increase}
                    >
                        Increase
                    </button>
                    <button
                        className="btn btn-danger my-2"
                        onClick={this.props.decrease}
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
    },
    mapDispatchToProps = dispatch => {
        return {
            increase: bindActionCreators(increament, dispatch),
            decrease: bindActionCreators(decreament, dispatch)
        };
    };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rtx);

Rtx.propTypes = {
    counter: PropTypes.number.isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired
};
