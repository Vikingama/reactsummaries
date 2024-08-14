import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { addReminder, delReminder, clearReminder } from "./../action/action";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }
    handleInput(event) {
        this.setState({
            text: event.target.value
        });
    }
    handlerAdd() {
        if (
            !this.state.text ||
            (this.state.text && this.state.text.trim().length === 0)
        ) {
            return false;
        }
        this.props.addReminder(this.state.text);
    }
    handlerDel(e) {
        this.props.delReminder(e.target.dataset.id);
    }
    handleClear() {
        this.props.clearReminder();
    }
    renderList() {
        const { reminders } = this.props;
        return (
            <ul className="list-group col-sm-8 mt-2">
                {reminders.map((item, index) => {
                    return (
                        <li className="list-group-item" key={index}>
                            <div className="list-item">
                                <div>{item.text}</div>
                                <em>{moment(item.time).fromNow()}</em>
                            </div>
                            <div
                                className="list-item delete-button"
                                data-id={item.id}
                                onClick={e => {
                                    this.handlerDel(e);
                                }}
                            >
                                &#x2715;
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
    render() {
        return (
            <div className="App">
                <div className="title">Reminder Pro</div>
                <div className="form-inline">
                    <div className="form-group mr-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="I hace to..."
                            onInput={this.handleInput.bind(this)}
                        />
                    </div>
                    <button
                        className="btn btn-success"
                        onClick={this.handlerAdd.bind(this)}
                    >
                        Add Reminder
                    </button>
                </div>
                {this.renderList()}
                <button
                    className="btn btn-danger mt-3"
                    onClick={this.handleClear.bind(this)}
                >
                    Clear Reminder
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        reminders: state
    };
};

export default connect(
    mapStateToProps,
    { addReminder, delReminder, clearReminder }
)(App);

App.propTypes = {
    reminders: PropTypes.array.isRequired,
    addReminder: PropTypes.func.isRequired,
    delReminder: PropTypes.func.isRequired,
    clearReminder: PropTypes.func.isRequired
};
