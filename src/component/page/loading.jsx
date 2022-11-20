import React from 'react'
import animation from '../animation/loading.json'
import Lottie from 'lottie-react'
const loading = () => {
  return (
      <div>
        <Lottie animationData={animation} loop={true} autoPlay={true} />
    </div>
  )
}

export default loading