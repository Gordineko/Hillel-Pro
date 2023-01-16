import './App.css';


import Form from '../Form/Form';
import List from '../List/List';


import { useState } from 'react';

function App() {

//   const [list,setList]=useState([
//     {id:1,title:'item 1' , isDone:false},
//     {id:2,title:'item 2' , isDone:true},
//     {id:3,title:'item 3' , isDone:true},
//     {id:4,title:'item 4' , isDone:false},
//   ])
//   function toggleTodo(id){
//     setList(
//       list.map((item)=>item.id === id ? {...item,isDone:!item.isDone}:item)
//     )
//   }
//   function deleteTodo(id){
//     setList(
//       list.filter((item)=>item.id !== id))
//   }

//  function saveTodo(newTodo){
//   setList([...list,{id: Date.newTodo(), ...newTodo,isDone:false}])
  

  // }
  
  

     return (
        <div className="container">
           
                    <List/>
                    <Form />
              
        </div>
    );
}

export default App;