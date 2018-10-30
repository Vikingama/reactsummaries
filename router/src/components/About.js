import React, { Component } from "react";

class About extends Component {
    render() {
        const params = new URLSearchParams(this.props.location.search);
        return (
            <div>
                ABOUT|
                {params.get("id")}|
                {params.get("name")}
            </div>
        );
    }
}

export default About;
