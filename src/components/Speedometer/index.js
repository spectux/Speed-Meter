import {useState} from 'react'
import './index.css'

const Speedometer = () => {
  const [speed, setSpeed] = useState(0)

  const accelerate = () => {
    if (speed < 200) {
      setSpeed(prevSpeed => prevSpeed + 10)
    }
  }

  const applyBrake = () => {
    if (speed > 0) {
      setSpeed(prevSpeed => prevSpeed - 10)
    }
  }

  return (
    <div className="speedometer-container">
      <h1>SPEEDOMETER</h1>
      <h2>Speed is {speed}mph</h2>
      <p>Min Limit is 0mph, Max Limit is 200mph</p>
      <div className="speedometer-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
      </div>
      <div className="buttons-container">
        <button className="accelerate-button" onClick={accelerate}>
          Accelerate
        </button>
        <button className="apply-brake-button" onClick={applyBrake}>
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default Speedometer
