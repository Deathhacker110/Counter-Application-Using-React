import React from "react";
export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state={count:0}
    }
    incre=()=>this.setState({count:this.state.count+1});
    decre=()=>this.setState({count:this.state.count-1});
    rese=()=>this.setState({count:0});

    render(){
        console.log(this.state.users);
        return (
        <>
        <h1 id="heading">Counter Application Using React</h1>
        <div id="count">
            <div> <h1>Count is:{this.state.count}</h1></div>
            <div>
            <button onClick={this.incre}>+</button>
            <button onClick={this.decre}>-</button>
            <button onClick={()=>this.setState({count:0})}>Reset</button> 
            </div>
        </div>
        </>
        );
    }
}
// export default App;