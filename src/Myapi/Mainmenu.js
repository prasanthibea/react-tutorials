/* import React from 'react'

export default function MainMenu() {
  return (
    <div>
      this is about page
    </div>
  )
} */



import React from 'react'
import GetNews from './GetNews'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
//import Aboutpage from './Aboutpage'
// import Books from './Books'
import { Menu } from 'semantic-ui-react'
// import Arithemetic from '../pages/Arithemetic'
// import ModalBox from '../pages/ModalBox'
import Loadnews from './Loadnews'
import TodoList from './TodoList'
import Myprofile from './Myprofile'

import StudentList from '../Props/StudentList'
import TodoListProps from '../Props/TodoListProps'
import TodoListEditable from './TodoListEditable'
import TodoListMultiField from '../Props/TodoListMultiField'
import DOM from '../Props/DOM'
import Nested from '../Advanced/Nested'


export default function Mainmenu() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuItems />} />
          {/*<Route index element={<Homepage />} />  */}
          {/*<Route path="about" element={<Aboutpage />} /> */}
          {/* <Route path="books" element={<Books />} />
          <Route path="calc" element={<Arithemetic />} />
          <Route path="modal" element={<ModalBox />} />*/}
          <Route path="loadnews" element={<Loadnews />} />
          <Route path="tudolist" element={<TodoList />} />
          <Route path="myprofile" element={<Myprofile />} />
          <Route path="getnews" element={<GetNews />} />
          <Route path="students" element={<StudentList />} />
          <Route path="TodoListProps" element={<TodoListProps />} />
          <Route path="TodoListEditable" element={<TodoListEditable />} />
          <Route path="TodoListMultiField" element={<TodoListMultiField />} />
          <Route path="dom" element={<DOM />} />
          <Route path="nested" element={<Nested />} />
          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  )
}

function MenuItems() {
  return (
    <>
      <Menu>

        <Menu.Item as={Link} to='/loadnews'>
          Loadnews
        </Menu.Item>

        <Menu.Item as={Link} to='/tudolist'>
          Tudolist
        </Menu.Item>

        <Menu.Item as={Link} to='/myprofile'>
          Myprofile
        </Menu.Item>

        <Menu.Item as={Link} to='/getnews'>
          GetNews
        </Menu.Item>

        <Menu.Item as={Link} to='/studentList'>
          StudentList
        </Menu.Item>

        <Menu.Item as={Link} to='/todolistprops'>
          Myprofile
        </Menu.Item>

        <Menu.Item as={Link} to='/TodoListEditable'>
          TodoListEditable
        </Menu.Item>

        <Menu.Item as={Link} to='/TodoListMultiField'>
          TodoListMultiField
        </Menu.Item>

        <Menu.Item as={Link} to='/dom'>
          DOM
        </Menu.Item>
        <Menu.Item as={Link} to='/homepage'>
          Homepage
        </Menu.Item>

        <Menu.Item as={Link} to='/nested'>
          Nested
        </Menu.Item>

      </Menu>

      <Outlet />
    </>
  )

}