import React, { Component } from "react";
import axios from 'axios'
import Img1 from './img/1.gif'
export default class App extends Component {
    render() {
        return (
            <div>
                <h3>App组件3</h3>
                <a href="ff.html">ff</a>
                <img src={Img1} />
                <br />
                <span>good</span>
            </div>

        )
    }

    componentDidMount() {
        axios.get('/data')
            .then(res => {
                console.log(res.data);
            })

    }
}

