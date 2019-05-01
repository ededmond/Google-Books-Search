import axios from "axios";
const BASEGOOGLE = "https://www.googleapis.com/books/v1/volumes?q=";
const GOOGLEAPI = "&key=AIzaSyDgrdnxyR2FqXFNRuWjJRPDaYTCDJ5se5Q";

searchBooks = (title,author) => {
    return axios.get(BASEGOOGLE + title + "+inauthor:" + author + GOOGLEAPI);
}

export default {
    searchBooks
}