//import React from 'react'
//import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
//import Books from './Books'
//import { Menu } from 'semantic-ui-react'
//
//export default function Mainmenu() {
//  return (
//    <div>
//      okk
//      <BrowserRouter>
//        <Routes>
//          <Route path="/" element={<MenuItems />}>
//            <Route index element={<Books />} />
//
//
//          </Route>
//        </Routes>
//
//
//      </BrowserRouter>
//    </div>
//  )
//}




//function MenuItems() {
//  return (
//    <div>
//      <Menu>
//        <Menu.Item>
//          <Link to="/">Home</Link>
//        </Menu.Item>
//
//        <Menu.Item as={Link} to='/books'>
//          Books
//        </Menu.Item>
//      </Menu>
//      <Outlet />
//    </div>
//  )
//
//}
//

import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
//import Homepage from './Homepage'
//import Aboutpage from './Aboutpage'
import Books from './Books'
import { Menu } from 'semantic-ui-react'
import Arithemetic from '../pages/Arithemetic'
import ModalBox from '../pages/ModalBox'
import Loadnews from './Loadnews'

export default function Mainmenu() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuItems />} />
          {/*<Route index element={<Homepage />} />  */}
          {/*<Route path="about" element={<Aboutpage />} /> */}
          <Route path="books" element={<Books />} />
          <Route path="calc" element={<Arithemetic />} />
          <Route path="modal" element={<ModalBox />} />
          <Route path="loadnews" element={<Loadnews />} />
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

      </Menu>

      <Outlet />
    </>
  )

}
