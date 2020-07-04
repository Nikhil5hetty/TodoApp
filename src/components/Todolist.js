import React, { Component } from "react";
import Todosearchbar from './Todosearchbar'
import Todoitems from './Todoitems' 
class Todolist extends Component {
    constructor(){
        super()
        this.state = {
            items:[],
            newitem:{
                
            }
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleOnclick=this.handleOnclick.bind(this)
        this.handleTodoChange=this.handleTodoChange.bind(this)
    }

    handleChange(event){
        const {value} = event.target
        this.setState(
            (prevState)=>{
                return(
                    {
                        items:prevState.items,
                        newitem:{
                            name:value,
                            key:Date.now()
                        }
                    }
                )
            }
        )
        
        
    }

    handleTodoChange(event,key){
        const {value} = event.target
        if(value.length>0){
            this.setState(
                (prevState)=>{
                    const updateditems =  prevState.items.map((item)=>{
                            if(item.key===key ){
                                return (
                                    {
                                        name:value,
                                        key:key
                                    }
                                )

                            }
                            return item

                        }
                    )
                    
                    return(
                        {
                            items:updateditems,
                            newitem:{
                                name:prevState.newitem.name,
                                key:Date.now()
                            }
                        }
                    )
                }
            )
        }else{
            this.handleOnclick(key)
        }
    }

    handleSubmit(event){
        if(this.state.newitem.name.length > 0){
            this.setState(
                (prevState)=>{
                    console.log(this.state.items.concat(prevState.newitem))
                    return(
                        {
                            items:prevState.items.concat(this.state.newitem),
                            newitem:{
                                name:"",
                                key:0
                            }
                        }
                    )
                }
            )
            
        }
        event.preventDefault()
    }

    handleOnclick(key){
        this.setState(
            (prevState)=>{
                const filtereditems=prevState.items.filter(item=> item.key !== key)
                return(
                    {
                        items:filtereditems,
                        newitem:prevState.newitem
                    }
                )
            }
        )
    }
  render() {
    return (
        <div className="todoListMain">
            <Todosearchbar onSubmit={this.handleSubmit} onChange={this.handleChange} itemval={ this.state.newitem.name }/>
            
            <Todoitems items={this.state.items} onClick={this.handleOnclick} onChangeTodo={this.handleTodoChange}/>
        </div>
    )
  }
}
 
export default Todolist;