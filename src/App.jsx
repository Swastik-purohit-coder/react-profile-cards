import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [card, setcard] = useState([])
  const fetchData = async () => {
    let a = await fetch ("https:jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setcard(data)
    console.log(data)
  }  
  useEffect(() => {
    
  fetchData()
    
  }, [])
  

  return (
    <>
    <Navbar />
      <div className="container">
        {card.map ((card)=>{
          return  <div key={card.id} className="card">
          <h1>{card.title}</h1>
          <p>{card.body}</p>
          <span>By: userId: {card.userId} </span>
          </div>
        })}
       
      </div>
    </>
  )
}

export default App
