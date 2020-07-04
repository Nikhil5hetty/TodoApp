import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Todoitems = (props) =>{
    if(props.items.length>0){
        const todoitemlist=props.items.map((item)=>{
            return (
            <li>
                <input key={item.key} value={item.name} onChange={(event)=>props.onChangeTodo(event,item.key)} />
            <span>
                   <FontAwesomeIcon 
                        className="faicons" 
                        icon="trash" 
                        onClick={()=>props.onClick(item.key)}
                    />
            </span>
            </li>)
            }
        )
        return(
            <ul className="theList">
                {todoitemlist}
            </ul>
        )
    }else{
        return(
            <ul className="theList">
                <li>No Todos</li>
            </ul>
        )
    }

    

}


export default Todoitems