import React from 'react'

export default function Counter(props) {
  return (
    <div>
      <div>{props.count}</div>
      <button onClick={props.onCountUp}>Count +1</button>
      <button onClick={props.onCountDown}>Count -1</button>
    </div>
  )
}
