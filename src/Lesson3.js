import React,{Component} from "react"

class StateFulComponent extends Component{

    constructor(){
        super()
        this.state={
            counter: 0,
        }
    }

    handleClick=()=>{

         this.setState((prevSta)=>({
            counter:prevSta.counter + 1,  //0+1=1,1+1=2
         }),
         ()=>{
            console.log('Counter updated',this.state.counter);
         }
         )
    }
   

    render(){
        return(
            <div>
                <h1>counter: {this.state.counter} </h1>
                <button onClick={this.handleClick}>IncreCounter</button>
            </div>
        )
    }


}


export default StateFulComponent