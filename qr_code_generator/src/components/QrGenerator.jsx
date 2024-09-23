import { useState } from "react";
import { QRCode } from "react-qr-code";

export const QrGenerator = () => {

    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    const handleQrCodeGenerator = () => {
        setQrCode(input);
        setInput("")
    }

    return (
        <div className="qr-container">
            <h1>Qr code Generator</h1>
            <div className="">
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    name="text"
                    value={input}
                    placeholder="enter your data"/>
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                     onClick={handleQrCodeGenerator}>Generator</button>
            </div>
            <div className="qr-code">
                <QRCode 
                    id="qr-value-code"
                    value={qrCode}
                    size={400}
                    bgColor= "#fff"
                />
            </div>
        </div>
    )
}