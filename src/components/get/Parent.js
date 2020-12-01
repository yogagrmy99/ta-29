import {Component} from "react";
import React from "react";
import Child from "./Child";
import Httpget from "./Httpget";

class Parent extends Component
{
    state = {komponenMuncul : true}
    ubahKomponenMuncul = () =>
    { this.setState((state) => {return {komponenMuncul : !this.state.komponenMuncul}}) }

    render()
    {
        return (
            <div>
                {this.state.komponenMuncul ? (<Child/>) : <Httpget/>}<br/><br/>
                <button onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'Munculkan' : 'Enough!'} </button>
                
            </div>
        );
    }
}
export default Parent;