import React, { useState } from 'react'
import { Container, Form, Checkbox, Button, Input } from 'semantic-ui-react'


export default function Variables() {
  const [X, setx] = useState(5)
  const [Y, sety] = useState(6)

  function handlex(e) {
    setx(e.target.value)
  }

  function handley(e) {
    sety(e.target.value)
  }

  return (
    <div>
      X: <Input type="text" value={X} onChange={handlex} />

      Y: <Input type="text" value={Y} onChange={handley} />

      < hr />
      <div>Multiplication: {X * Y}</div>
      <div>sub: {X - Y}</div>

      < hr />
      <Container>
        <Form>
          <Form.Field>
            <label>X</label>
            <input value={X} onchange={handlex} />

          </Form.Field>
          <Form.Field>
            <label>Y</label>
            <input value={Y} onchange={handley} />

          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>





      </Container>



    </div>
  )
}
