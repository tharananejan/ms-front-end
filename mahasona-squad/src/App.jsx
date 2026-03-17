import Header from './Header/Header.jsx'
import Backgroundgif from './Backgroundgif/Backgroundgif.jsx'
import Content from './Content/Content.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  
  const recieveScrollData=(data)=>{
    setScroll(data);
  }
  const [scrollValue,setScroll] = useState(false);

  return(
    <div className="appContainer">
        <Backgroundgif scrollVal={scrollValue} />
        <Header/>
      <Content sendScrollData={recieveScrollData}/>
    </div>
  )
}

export default App
