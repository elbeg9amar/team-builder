import React from 'react'


export default function Form(props) {
    const {} = props

    return (
        <form className='form div'> 
            <div>
                <h2>Add a member</h2>
            </div>
            <div>
                <h4>General information</h4>

                <label>Username:&nbsp;
                    <input
                        name='username'
                        placeholder='type yourname'
                        maxLength='20'
                        type="text"                    />
                </label>

                <label>Email:&nbsp;
                    <input
                    name='email'
                    placeholder='type email'
                    maxLength='30'
                    type='email'
                    />
                </label>

                <label>Role:&nbsp;
                    <select>
                        <option value="">-- Select a Role --</option>
                        <option value="student">Student</option>
                        <option value="tl">Team Lead</option>
                        <option value="alumni">Alumni</option>
                        <option value="boss">Boss</option>
                    </select>
                </label>
                
                <button>Done</button>
            
            </div>

        </form>
    )
}