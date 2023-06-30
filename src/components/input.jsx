import React from "react";

function Input(props){
    return <input onChange={props.Change} type="text" value={props.display} />
}

export default Input;