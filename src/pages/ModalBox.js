import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function ModalBox() {

  const [box, setbox] = useState(false)

  function run() {
    setbox(true)
    console.log('gggg')
  }

  function closebox() {
    setbox(false)
  }

  return (
    <div>
      <Modal
        open={box}
        closeIcon
        onClose={() => setbox(false)}
        onOpen={() => setbox(true)}>

        <Modal.Header>Add New Item:</Modal.Header>
        <Modal.Content>
          <p>Most of the stories of your childhood were probably stories with morals. These are not the kind  //stories we see very often these days. Wouldn't it be amazing to share these stories with your child? Why //t start with this list that we have put together for you.</p>

        </Modal.Content>

        <Modal.Actions>
          <Button color='grey' onClick={closebox}>Close</Button>
          <Button color='blue' onClick={() => { setbox(false) }}>Save Changes</Button>

        </Modal.Actions>
      </Modal>
      <Button color='blue' onClick={run}>Open Box</Button>
    </div>
  )
}




