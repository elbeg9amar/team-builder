import React, {useState} from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Form from './Form'


const initialMembersList = [{
    id: uuid(), 
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Player',
}]

const initialFormValues = {
  username: '',
  email:'',
  role:'',
}

function App() {
  const [teamMembers,  setTeamMembers] = useState(initialFormValues)

  const [formValues,setFormValue] = useState(initialFormValues)

  // const UpdateFrom = 

  return (
    <div className='container'>
        <header><h1>Team Members</h1></header>

        <Form />






    </div>



  )
}

export default App;
