import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const ChildDish = props => {
        return (
            <div>
                <button
                    onClick={() => {
                        props.history.push("/ds7gf687d6f8d7");
                    }}
                >
                    ChildDish
                </button>
            </div>
        );
    },
    WithDish = withRouter(ChildDish);

class Home extends Component {
    render() {
        return (
            <div>
                HOME
                <WithDish />
            </div>
        );
    }
}

export default Home;
