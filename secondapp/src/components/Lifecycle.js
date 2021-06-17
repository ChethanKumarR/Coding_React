//Every Component will undergo 5 stages of Life cycle

//get the initial state
//set the initial state
//before get created
//render
//after get created



import React,{Component} from "react";


class LifeCycle extends Component {
    //Stage1 <<<<<<Get the initial state>>>>>>
    constructor(props){
        super();
        //Stage 2 <<<<<<<<<<Set the initial state>>>>>>>>>>
        this.state={
            title:"LifeCycle"
        }
        console.log("1 and 2nd stage of Lifecycle<<<<<<<<Inside the Constructor>>>>>>>>");
    }
    componentWillUpdate(){
        console.log("<<<<<<<<<<<<Indisde the componentWillUpdate Lifecycle>>>>>>>>>>>>>>")
    }
    componentDidUpdate(){
        console.log("<<<<<<<<<<<<Indisde the componentDidUpdate Lifecycle>>>>>>>>>>>>>>>")
    }
    //Stage3 <<<<<<<<<<<Before get created>>>>>>>>>>>>>>>
    UNSAFE_componentWillMount(){
        console.log("3rd stage of Lifecycle<<<<<<<<<<componentWillMount Lifecycle>>>>>>>>");
    }
    
    //prevent rendering if there is no state update
    //If the next value going to come will be same as the previous value it will not re render (optimization)
    //it will stop re rendering of a component unnecessarily
    shouldComponentUpdate(nextProps, nextState){
        console.log("<<<<<<<<<<<<Inside the shouldComponentUpdate Lifecycle>>>>>>>>>>>>>>>>>")
        if(nextState.title == this.state.title){
              return false
        }else{
            return true
        }
    }

    static getDerivedStateFromProps(props,state){
        console.log("<<<<<<<<inside getDerivedStateFromProps state>>>>>>>>>" , state);
        console.log("<<<<<<<<inside getDerivedStateFromProps props>>>>>>>>>" , props);
    }

    render(){
        //Stage4 <<<<<<<<<<<<<<<render>>>>>>>>>>>>>>>>>>>>>>
        console.log("4th stage of Lifecycle<<<<<<<<<Inside the render function >>>>>>>>>>");
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button className="btn btn-success" onClick={()=>this.setState({title:"Updated state"})}>Click Me</button>
            </div>
        )
    }
 
    //Stage5 <<<<<<<<<<<<<<<After get created>>>>>>>>>>>>>
    componentDidMount(){
        console.log("5th stage of Lifecycle<<<<<<<<<Inside the componentDidMount function>>>>>>>>>>")
    }

    componentWillUnmount(){
        console.log("<<<<<<<<<<<Inside the componentWillUnmount Lifecycle")
        alert("Called after the component is Unmounted from the DOM")
    }
}   

export default LifeCycle;