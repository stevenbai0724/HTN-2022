import React from 'react'

function Image(props) {
  return (
    <img style = {{marginBottom: "15px", width: "90%"}} src = {props.src}></img>
  )
}

export default Image