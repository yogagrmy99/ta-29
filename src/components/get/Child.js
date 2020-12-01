import React, {Component} from "react";

class Child extends Component 
{
    state = {angka: 0}

    componentDidMount(){alert('This might be better for you');}
    
    render()
    {
        return (
            <div>
            </div>
        );
    }
        
    componentWillUnmount(){alert("Oh no...");}
    
}
export default Child;