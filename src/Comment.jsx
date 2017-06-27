import React, { Component } from 'react'



const comment  = (props) =>
    <p className="well" key={props.comment}>{props.comment}</p>

export default comment