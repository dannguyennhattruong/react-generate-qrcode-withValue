import React, { Component } from 'react'

export default class InputValue extends Component {

    state = {
        value : ''
    }

    _handleChange = (e) => {
        this.setState({value : e.target.value})

    }
    render() {
        const {label, callback} = this.props
        callback(this.state.value)
        return (
            <div>
                <label>{label}</label>
                <input type="text" value={this.state.value} onChange={this._handleChange}/>
            </div>
        )
    }
}
