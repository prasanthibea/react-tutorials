import React from 'react'
import Arithemetic from './pages/Arithemetic'
import Buttonpages from './pages/Buttonpages'
import Loops from './pages/Loops'

export default function App() {
  const divStyle = {   
    border: '2px solid green', 
    padding: '10px', 
    margin: '10px', 
    display: "inline-block" 
  };
  return (
    <div>
      hai
      <h1>hello</h1>
      prasanthi
      <br></br>
      python
      <br></br>
      <i>hai</i>
      <br></br>
      <ins>hello</ins>
      <br></br>
      <img src ="https://www.beanalytic.com/wp-content/uploads/2021/07/BeAnalytic-Logo.jpg" alt ="" width = "150px"/>

	  <br></br>
	
      <div style={divStyle}>
        <h2>Student Name</h2>
        <h3>Town: Nellore</h3>
        <h3>Phone: 112233</h3>
		  </div>
<Arithemetic/>
<Buttonpages/>
<Loops/>

    </div>
    
  )
}
