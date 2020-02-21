import React, { Component } from 'react';
import QRCode from 'qrcode.react';

export default class QRCodee extends Component {
    render() {
        const { value, id, onClick } = this.props;
        return (
            <div style={{margin:30}}>
                {value && (
                    <>
                        <QRCode id={id} className={"qr"} value={value} renderAs="canvas" size={400} bgColor={"#fff"} fgColor={"#333"} level="H" includeMargin />
                        <p>Please scan this qr code to get ticket's infomation or ...</p>
                        <br/>
                        <button onClick={onClick}>Download QRCode</button>
                    </>
                )}

            </div>
        )
    }
}
