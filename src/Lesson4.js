import React,{Component} from "react"



class Todo extends Component{

    constructor(){
        super();
        this.state={
            todo:["dancing","coding"],
            text:""
        }

    }

    addItem=()=>{
      
        const {todo,text}=this.state;
        if(!todo.includes(text) && text.length > 0){
            this.setState({
                todo: [...todo,text],text:""
            })
        }

    }

    deleteItem=(item)=>{

        const {todo}=this.state;
        this.setState({
            todo: todo.filter((i) => i !== item)
        })
    }

    handleTextChange=(event)=>{
       
        this.setState({
            text: event.target.value
        })
    }

    render(){

              const {todo,text}=this.state
        return(
            <div>
                <input value={text} placeholder="add your items" onChange={this.handleTextChange} /> 
                <button onClick={this.addItem}>Add Item</button>
                <ul>
                {
                    todo.map((item)=>(
                        
                            <li key={item}>{item}
                            <button onClick={()=>this.deleteItem(item)}>Delete Item</button>
                            </li>
                    ))

                }
                </ul>
            </div>
        )
    }
}

export default Todo