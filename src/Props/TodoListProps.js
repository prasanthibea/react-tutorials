import React, { useState } from 'react'
import ModalExampleModal from './AddItemBox'

export default function TodoListProps() {
  const [list, setlist] = useState(['Raja', 'Bala', 'Santhi'])
  return (
    <div>
      <ModalExampleModal list={list} setlist={setlist} />
      <ol>
        {
          list.map((item) => <li>{item}</li>)
        }
      </ol>
    </div>
  )
}