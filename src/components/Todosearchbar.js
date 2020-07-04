import React from 'react'

const Todosearchbar = (props)=>{
    return(
        
            <div className="header">
                <form onSubmit={(event)=>props.onSubmit(event)}>
                    <input placeholder="enter task" 
                    value={typeof props.itemval ==='undefined'? "":props.itemval
                        }
                    
                    onChange={(event)=>props.onChange(event)} >
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
        
    )
}

export default Todosearchbar