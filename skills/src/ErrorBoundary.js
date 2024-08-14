import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node)
        ]).isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
    }
    render() {
        if (this.state.hasError) {
            return <div>Oops! A Error Occured...</div>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
