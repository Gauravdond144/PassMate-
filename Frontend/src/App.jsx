import { useState } from 'react'
import Navbar from './components/Navbar'
import ShowQNA from './components/ShowQNA'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <ShowQNA></ShowQNA>
    <ShowQNA></ShowQNA>
    <ShowQNA></ShowQNA>
    <ShowQNA></ShowQNA>
    </>
  )
}

export default App
