import React from 'react';
import "./Divider.scss";

export default function Divider({isFullWidth=false, isBlack=false, styles={}, classes=""}) {
  return (
    <div 
    style={{...styles}}
    className={
      `divider ${isFullWidth ? "divider--full" : ""} ${isBlack ? "divider--black" : ""} ${classes }`
    }/>
  )
}
