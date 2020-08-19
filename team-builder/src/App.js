import React, {useState,useEffect} from 'react';

import { v4 as uuid } from 'uuid'
import './App.css';
import Form from './Form'
import Member from './Member'


const initialMemberList = [{
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
  const [teamMembers,  setTeamMembers] = useState([])
  
  const [formValues,setFormValue] = useState(initialFormValues)

 
  const updateForm =(inputName, inputValue) => {
    setFormValue({...formValues,[inputName]:inputValue})
  }

  const submitForm =() => {
    const member = {
      id: uuid(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!member.username || !member.email) return

    setTeamMembers([...teamMembers,member])

    return setFormValue(initialFormValues)
  }
  
  return (
    <div className='container'>
        <header><h1>Team Members</h1></header>

        <Form 
        
        values={formValues}
        update={ updateForm } 
        submit={submitForm}
        
        />
      {
        teamMembers.map(member => {
            
              return <Member detail={member}/>
            
        })
      }
        





    </div>



  )
}

export default App;
