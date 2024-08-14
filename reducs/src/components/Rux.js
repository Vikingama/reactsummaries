import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { increament, decreament, puzzle } from "./../actions";

class Rux extends React.Component {
    render() {
        const { increament, decreament, puzzle } = this.props;
        return (
            <div className="container">
                <h1 className="junbotron-heading text-center">
                    Rux|
                    {this.props.counter}
                </h1>
                <p className="text-center">
                    <button
                        className="btn btn-primary mr-2"
                        onClick={increament}
                    >
                        Increase
                    </button>
                    <button className="btn btn-success mr-2" onClick={puzzle}>
                        Puzzle
                    </button>
                    <button
                        className="btn btn-danger my-2"
                        onClick={decreament}
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

export default connect(
    mapStateToProps,
    {
        increament,
        decreament,
        puzzle
    }
)(Rux);

Rux.propTypes = {
    counter: PropTypes.number.isRequired,
    increament: PropTypes.func.isRequired,
    decreament: PropTypes.func.isRequired
};
