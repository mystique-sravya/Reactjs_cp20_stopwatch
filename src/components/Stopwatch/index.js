import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    seconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, seconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  getSeconds = () => {
    const {seconds} = this.state
    const secondstime = Math.floor(seconds % 60)

    if (secondstime < 10) {
      return `0${secondstime}`
    }
    return secondstime
  }

  getMinutes = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.getMinutes()}:${this.getSeconds()}`
    return (
      <div className="stopwatch-app-container">
        <div className="Stopwatch-container">
          <h1 className="heading1">Stopwatch</h1>
          <div className="timer-box">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <div>
              <h1 className="stopwatch-timer">{time}</h1>
            </div>
            <div className="timer-buttons">
              <button
                type="button"
                className="btn start"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
