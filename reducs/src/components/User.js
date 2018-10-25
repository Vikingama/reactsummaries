import React, { Component } from "react";
import { connect } from "react-redux";
import { getinfo } from "./../actions";

class User extends Component {
    render() {
        const { getinfo, user } = this.props;
        return (
            <div className="container text-center">
                <h1 className="junbotron-heading text-center">
                    User|
                    {user.email}
                </h1>
                <button
                    className="btn btn-warning my-6"
                    onClick={() => getinfo()}
                >
                    Get Random Info
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(
    mapStateToProps,
    { getinfo }
)(User);
