import React from "react";
import PropTypes from "prop-types";
import padStart from "lodash/padStart";

const Clock = ({ milliseconds }) => {
    // 转换函数
    const ms2Time = milliseconds => {
        let time = milliseconds;
        const ms = milliseconds % 1000;
        time = (milliseconds - ms) / 1000;
        const seconds = time % 60;
        time = (time - seconds) / 60;
        const minutes = time % 60;
        const hours = (time - minutes) / 60;

        const result =
            padStart(hours, 2, "0") +
            ":" +
            padStart(minutes, 2, "0") +
            ":" +
            padStart(seconds, 2, "0") +
            "." +
            padStart(ms, 3, "0");
        return result;
    };
    const style={
        'fontFamily':'monospace'
    }
    // 返回时分秒
    return <div style={style}>{ms2Time(milliseconds)}</div>;
};
Clock.propTypes = {
    milliseconds: PropTypes.number.isRequired
};

const Buttons = props => {
    let { isActive, onStart, onPause, onSplit, onReset } = props;
    // 返回两个控制按钮
    if (isActive) {
        // 已经开始计时
        return (
            <div>
                <button onClick={onSplit}>计次</button>
                <button onClick={onPause}>停止</button>
            </div>
        );
    } else {
        // 未开始计时
        return (
            <div>
                <button onClick={onReset}>复位</button>
                <button onClick={onStart}>启动</button>
            </div>
        );
    }
};
Buttons.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onSplit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired
};

const PerTimes = ({ perTimes = [] }) => {
    // 返回所有计次时间
    return perTimes.map((v, k) => <Clock milliseconds={v} key={k} />);
};
PerTimes.propTypes = {
    perTimes: PropTypes.arrayOf(PropTypes.number)
};

class Watch extends React.Component {
    state = {
        isActive: false,
        startTime: 0,
        currentTime: 0,
        perTimes: []
    };
    onStart = () => {
        this.setState({
            isActive: true,
            startTime: Date.now(),
            currentTime: Date.now()
        });
        this.interval = setInterval(() => {
            this.setState({
                currentTime: Date.now()
            });
        }, 1000 / 60);
    };
    onPause = () => {
        clearInterval(this.interval);
        this.setState({
            isActive: false
        });
    };
    onSplit = () => {
        this.setState({
            perTimes: [
                ...this.state.perTimes,
                this.state.currentTime - this.state.startTime
            ]
        });
    };
    onReset = () => {
        clearInterval(this.interval);
        this.setState({
            isActive: false,
            startTime: 0,
            currentTime: 0,
            perTimes: []
        });
    };
    render() {
        return (
            <React.Fragment>
                <Clock
                    milliseconds={this.state.currentTime - this.state.startTime}
                />
                <Buttons
                    isActive={this.state.isActive}
                    onStart={this.onStart}
                    onPause={this.onPause}
                    onSplit={this.onSplit}
                    onReset={this.onReset}
                />
                <PerTimes perTimes={this.state.perTimes} />
            </React.Fragment>
        );
    }
}

export default Watch;
