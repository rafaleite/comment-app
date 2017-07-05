import React from 'react'



const comment = (props) =>
    <p className="well" key={props.comment}>
        {props.comment} <br />
        <i><b>{props.user.name}</b> </i>
    </p>


export default comment