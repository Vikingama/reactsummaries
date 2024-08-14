import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Rsx extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="junbotron-heading text-center">
                   Rsx|{this.props.counter}
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
            increase: () => {
                dispatch({ type: "INCREASE" });
            },
            decrease: () => {
                dispatch({ type: "DECREASE" });
            }
        };
    };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Rsx);

Rsx.propTypes = {
    counter: PropTypes.number.isRequired,
    increase:PropTypes.func.isRequired,
    decrease:PropTypes.func.isRequired,
};