import React, { Component } from 'react';
import LoadingGif from './loading.gif';

export default class Loading extends Component {
    render() {
        return (
            <div>
                <img src={LoadingGif} alt="" width="500" height="500"/>
            </div>
        )
    }
}
