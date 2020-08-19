import React from 'react'

function Member(props){
    const { detail } = props
    console.log(detail)
    if(!detail){
        return <h3>
            Working fetching your friend&apos;s detail..
        </h3>
    }
    return(
        <div>
            <h2>Username:{detail.username}</h2>
    <h3>Email: {detail.email}</h3>
    <h3>
        Role:{detail.role}
    </h3>
        </div>
        
    )
}

export default Member