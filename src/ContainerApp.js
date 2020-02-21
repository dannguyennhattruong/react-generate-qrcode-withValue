import React, { Component } from 'react'
import QRCodee from './QRCode'
import Loading from './Loading';
import "./ContainerApp.css"

export default class ContainerApp extends Component {

    state = {
        loading: false,
        value: '',
        valueInput: '',
        error: {},
        isShow: false,
        showTip: false
    }

    _handleCreateWithValue = () => {
        this.setState({ error: {} })
        this.setState({ loading: true })
        this.setState({ valueInput: this.state.value })
        setTimeout(() => {

            this._checkErr();
            this.setState({ loading: false })
        }, 30 * 100)
    }

    _handleChange = (e) => {
        this.setState({ value: e.target.value })

    }

    _checkErr = () => {
        const error = {};
        if (!(this.state.value.length === 0)) {
            this.setState({ error: {} })
        }
        else {
            console.log("alo")
            error.value = "Please fill all fields before creating qr code";
            this.setState({ error: error })
            this.setState({ isShow: true })
        }
    }

    _randomNumber = (min, max) => {
        return Math.floor(Math.random() * (+max - +min)) + +min;
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ showTip: !this.state.showTip })
        }, this._randomNumber(5, 15) * 1000)
    }

    render() {
        return (
            <div className="container">
                <div>
                    <label>Value</label>
                    <p style={{ color: "green", position: "absolute", top: "20px", left: "20px" }} hidden={!this.state.showTip}>You can stringify obj => string to past here as well!</p>
                    <br />
                    <input autoFocus type="text" value={this.state.value} onChange={this._handleChange} />
                    <br />

                </div>
                <button onClick={this._handleCreateWithValue}>Create</button>
                {this.state.loading ? (
                    <Loading />
                ) : <QRCodee value={this.state.valueInput} />

                }
                <p style={{ color: "red" }}>{this.state.error.value} </p>
            </div>
        )
    }
}
