import React from 'react'
import './Button.css'

const Button = ({ text, onClick, height, width }) => {
  return (
    
    <div className="flex justify-center mt-5">
     <div 
        className="button-3d" 
        style={{ width: width, height: height }} 
        onClick={onClick}
      >
      <div className="side default-btn">{text}</div>
      <div className="side hover-btn">{text}</div>
    </div>
  </div>
  )
}

export default Button