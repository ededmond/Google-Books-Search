import axios from "axios";
const BASEGOOGLE = "https://www.googleapis.com/books/v1/volumes?q=";
const GOOGLEAPI = "&AIzaSyBodkJ70r2iKmx0rLJMyWNN9T3_xC3FPR8";

const searchBooks = (title,author) => {
    const query =BASEGOOGLE + title + "+inauthor:" + author + GOOGLEAPI;
    // console.log(query);
    return axios.get(BASEGOOGLE + title + "+inauthor:" + author + GOOGLEAPI);
}

const saveBook = book => {
    return axios.post("/api/books",book);
}

const getSavedBooks = () => {
    return axios.get("/api/books");
}

export default {
    searchBooks,
    saveBook,
    getSavedBooks
}