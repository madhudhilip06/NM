import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <h1>TO DO LIST</h1>

    </>

  )
}
function App1() {
  const [name,setName] = useState([]);
  const[search,setSearch]=useState();
  const[list,setList]=useState([...JSON.parse(localStorage.getItem('todoItems'))]);
  const[searchList,setSearchList]=useState(list);

  if(!localStorage.getItem('todoItems')){
    setList([...JSON.parse(localStorage.getItem('todoItems'))])
    
  }

  
  function nameChange(){
    setList([...list,name])
    setSearch([...list,name])
    console.log(list)
    localStorage.setItems('todoItems',JSON.stringify(list))
  }

  function searching(){
    if(search)
      setSearchList(list.filter(val=>{if(val.includes(search))return val}))
    else
    setSearchList(list)
  }
  
  function deleteItem(value){
    setList(list.filter((val)=>{
      if(value!==val)
      return val
      })
    )
    setSearchList(list.filter((val)=>{
      if(value!==val)
        return val
      })
    )
  }
  return (
    <>
      <div>
        <h1>{name}</h1>
        <input type="text" onChange={(event)=>setName(event.target.value)}/>
        <button onClick={nameChange}>Add</button>
        <input type="text" placeholder='Search' onChange={(event)=>setSearch()}/>
        <button onClick={search}>Search</button>
      </div>
      
      <div>{
         //list.map((value)=>(
        searchList.map((value)=>(
        <tr>
        <td><h1 className='item-head'>{value}</h1></td>
        <td><button onClick={()=>deleteItem(value)}>Delete</button></td>
        </tr>
        ))
      }
      </div>

    </>

  )
}
export{App,App1}