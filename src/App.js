import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
 
  let reason='';
  let name='';
  let date='';

  return (
    <div className="App">
      <p>Student</p>

      <input type="text" placeholder='reason' onChange={(event)=>{
          reason= event.target.value;
          console.log(reason)
          // setReason(event.target.value)
      }} />
      <input type="text" placeholder='studentname' onChange={(event)=>{
          name= event.target.value;
          console.log(name)
          // setReason(event.target.value)
      }}/>
      <input type="text" placeholder='date'onChange={(event)=>{
          date= event.target.value;
          console.log(date)
          // setReason(event.target.value)
      }}/>

      <button onClick={()=>{
          let leaveObject={};
          leaveObject.reason=reason;
          leaveObject.name=name;
          leaveObject.date=date;
          console.log(leaveObject)

          axios.post('http://localhost:3000/submitLeave',leaveObject);
      }}>Submit leaave</button>

    </div>
  );
}

export default App;
