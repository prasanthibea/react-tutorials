import React from 'react'
import Card from './Card'

export default function Nested() {
  return (
    <div>
      <Card name="bala" age={30}>
        <b>hai</b>
        <i>hello</i>
        <i>bye</i>
      </Card>
    </div>
  )
}
