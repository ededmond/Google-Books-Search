import React, {useState} from "react";
import io from "../../node_modules/socket.io-client/dist/socket.io";

const socket = io();

const style = {
    position:"fixed",
    right:"5px",
    top:"0px"
}

const BookAlert = () => {
    const [state,setState] = useState({
        title : "",
        authors: []
    })

    socket.on("savedBook",book => {
       setState(book);
    })
    if (state.title) {
        return (<div className = "alert" style={style}>
            <h3>{state.title}</h3>
        </div>)
    }else {
        return false;
    }
    
}

export default BookAlert;