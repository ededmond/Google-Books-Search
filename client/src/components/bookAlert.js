import React, {useState} from "react";
import io from "../../node_modules/socket.io-client/dist/socket.io";

const socket = io("https://localhost/3002");
const BookAlert = () => {
    const [state,setState] = useState({
        title : "",
        authors: []
    })

    socket.on("savedBook",book => {
       setState(book);
    })
    if (state.title) {
        return (<div className = "alert" style={{position:"fixed",right:"5px",top:"0px"}}>
            <h3>{state.title}</h3>
        </div>)
    }else {
        return false;
    }
    
}

export default BookAlert;