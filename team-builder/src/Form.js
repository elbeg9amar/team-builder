import React from 'react'


export default function Form(props) {
    const {values, update,submit } = props

    const onChange = evt => {
        const {name, value} = evt.target
       update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form div' onSubmit={onSubmit}> 
            <div>
                <h2>Add a member</h2>
            </div>
            <div>
                <h4>General information</h4>

                <label>Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        placeholder='type yourname'
                        maxLength='20'
                        type="text"
                    />            
                </label>

                <label>Email:&nbsp;
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    placeholder='type email'
                    maxLength='30'
                    type='email'
                    />
                </label>

                <label>Role:&nbsp;
                    <select value={values.role} onChange={onChange}name='role'>
                        <option value="">-- Select a Role --</option>
                        <option value="student">Student</option>
                        <option value="tl">Team Lead</option>
                        <option value="alumni" >Alumni</option>
                        <option value="boss">Boss</option>
                    </select>
                </label>

                <button 
                 disabled={!values.username|| !values.email || !values.role ? true : false
                }>Done</button>
            
            </div>

        </form>
    )
}
