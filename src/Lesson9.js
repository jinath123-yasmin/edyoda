import React from "react"

class LifeCycleExamples extends React.Component{

    constructor(){
        super();
        this.state={value:0}
        console.log("constuctor is getting called");
    }

    componentDidMount(){
        console.log("Component did mount is geting called")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component Update is called")
        return this.state.value !== nextState.value
    }

    componentDidUpdate(prevProps,prevState){
        console.log("component Did Update is called")
    }

    componentWillUnmount(){
        console.log("Component will unmount")
    }

    handleButtonClick=()=>{
         this.setState((prevState)=>(
            {value: prevState.value+1}
         ))
    }

    render(){
        console.log("rendered method is called")
        return(
            <div>
                <p>Value:{this.state.value} </p>
                <button onClick={this.handleButtonClick}>ADd button</button>
            </div>
        )
    }
}

export default LifeCycleExamples