import React, {useState,useEffect} from "react";
import io from "socket.io-client/dist/socket.io";
import "./alert.css";
const socket = io();

const BookAlert = () => {
    const [state,setState] = useState({
        title : "",
        authors: [],
        shown: "hidden"
    })

    socket.on("savedBook",book => {
       setState({...book,shown:"shown"});
    })

    useEffect(() => {
        //set timer for hidding book
        const timer = setTimeout(() => setState({...state,shown:"hidden"}),3000)
        // remove timer if get another book
        return () => {clearTimeout(timer)};
    },[state])

    return (<div className = {"alert "+state.shown}>
        <p><strong>{state.title}</strong> has been saved to the database</p>
    </div>)
    
}

export default BookAlert;