import React from 'react'
import Student from './Student'
import StuCard from './StuCard'
import { Card } from 'semantic-ui-react'

export default function StudentsList() {
  const data = [
    { name: "Raju", phone: '+911235679' },
    { name: "Ramu", phone: '+911235679' },
    { name: "Mahesh", phone: '+911235679' },
    { name: "Raja", phone: '+911235679' },
    { name: "Bala", phone: '+911235679' },
    { name: "Santhi", phone: '+91123465798' },
  ]
  return (
    <div>
      <Card.Group itemsPerRow={5}>
        {data.map((item) => <StuCard item={item} />)}
      </Card.Group>
    </div>
  )
}