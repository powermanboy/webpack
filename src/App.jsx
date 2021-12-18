import React, { Component } from "react";
import axios from 'axios'
import Img1 from './img/1.gif'
import Style from './css/style'
export default class App extends Component {
    render() {
        return (
            <div className={Style.special}>
                <h3>App组件3</h3>
                <a href="ff.html">ff</a>
                <img src={Img1} />
                <br />
                <span className={Style.one}>good</span>
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

