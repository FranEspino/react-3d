import React from 'react'
import '@google/model-viewer'
import model from './assets/spiderman.glb';
import './App.css'
const App = () => {
  return (
    <div className="model ">
          <model-viewer
            poster="https://res.cloudinary.com/frapoteam/image/upload/v1620880668/avatarss_b1m8ml.png"
            src={model}
            alt="model name"
            loading="lazy"
            auto-rotate
            camera-controls
            shadow-intensity="2"
            autoplay
          ></model-viewer>
    </div>
  )
}
export default App
