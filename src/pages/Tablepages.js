import React from 'react'
import { Header, Table, Icon} from 'semantic-ui-react'


export default function Tablepages() {
  
  
  
  return (  
    <div>
      <Icon name='home' size='large' />
      <Header size='large'>Time Table</Header>

      <Table>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>3</Table.Cell>
        </Table.Row>
        
        <Table.Row>
          <Table.Cell>Monday</Table.Cell>
          <Table.Cell>Telugu</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>English</Table.Cell>
         
        </Table.Row>

        <Table.Row>
          <Table.Cell>Tuesday</Table.Cell>
          <Table.Cell>Telugu</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>English</Table.Cell>
         
        </Table.Row>

        <Table.Row>
          <Table.Cell>Wednesday</Table.Cell>
          <Table.Cell>Telugu</Table.Cell>
          <Table.Cell>Hindi</Table.Cell>
          <Table.Cell>English</Table.Cell>
         
        </Table.Row>



      </Table>
    </div>
  )
}
