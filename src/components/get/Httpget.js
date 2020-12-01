import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "../../assets/sddefault.jpg"
//import hh from "../../assets/sddefault.jpg"
class Httpget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ar: [],
            jokes: "",
            jokest: "",
            img: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
            urlh: "https://quote-garden.herokuapp.com/api/v2/quotes/random",
            ke: 0
        };
        this.jalan();
        this.ar1 = [];
    }

    reloadh = () => {
        this.jalan();
        this.setState({
            a_jokes: this.a
        });
        //document.getElementById('pict').src = this.state.img;
    };

    ganti = () => {
    }

    jalan = () => {
        axios({
            method: "get",
            url: this.state.urlh,
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log("have you had enough");
                this.setState({
                    jokes: data.data.quote.quoteText,
                    img: data.data.icon_url,
                });

            })
            .catch((error) => {
                console.log(error);
            });

        axios({
            method: "get",
            url: "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data.quotes);
                this.setState({
                    ar: data.data.quotes
                    //img: data.data.icon_url,
                });
                this.ar1 = data.data.quotes;
                console.log(this.ar1);

            })
            .catch((error) => {
                console.log(error);
            });


    }

    componentDidMount() {
        window.confirm("This might be dark...");
    }

    componentWillUpdate() {
        //window.confirm("yakin?");
    }

    componentDidUpdate() {
    }


    render() {
        return (
            <div>
                <img src={require("../../assets/sddefault.jpg")} width="200px"></img>
                <div className="boxWhite">
                    <center>
                        <h1>What are you looking for?</h1>
                        <h2>a motivation?</h2>
                        <h3>here we go again...</h3>
                    </center>
                    <center>
                        <button onClick={this.reloadh}>refresh</button>
                        <br />
                        <button onClick={this.ganti}>another??</button>
                    </center>
                    <br /><br /><br /><br /><br />
                    <li><img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" id="pict" width="30" height="30"></img><i>{this.state.jokes}</i></li>
                </div>
                {console.log("ar=" + this.state.ar)}
                
            </div>
        );
    }
}
export default Httpget;