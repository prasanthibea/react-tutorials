import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Buttonpages() {
  function run() {
    console.log('hi iam prasanthi')
  }
  return (
    <div>
      <button onClick = {run}>Click here</button>
      <h1 style={{ color: 'red', backgroundColor: 'green' }}>Hello world</h1>

      <Button color='blue'>Login</Button>
      <Button color='green'>Register</Button>
    </div>
  )
}
