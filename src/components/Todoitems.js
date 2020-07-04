import React from 'react'

const Todoitems = (props) =>{
    if(props.items.length>0){
        const todoitemlist=props.items.map((item)=>{
            return (
            <li 
                key={item.key} 
                onClick={()=>props.onClick(item.key)}
            >{item.name}
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