import React from 'react'

import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

export default function Homepage() {
  const [x, setx] = useState(1)
  return (
    <div>
      this is home page
      <Button onClick={() => { setx(1) }}> page1 </Button>
      <Button onClick={() => { setx(2) }}> page2 </Button>
      <Button onClick={() => { setx(3) }}> page3 </Button>


      {x === 1 && <p>1: hai</p>}
      {x === 2 && <p> 2: hello </p>}
      {x === 3 && <p> 3: iam prasanthi </p>}

    </div>
  )
}
