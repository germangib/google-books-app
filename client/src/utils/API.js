import axios from "axios";
const GOOGLEURL = "https://www.googleapis.com/books/v1/volumes?q="
const resultslimit = "&maxResults=40"

export default {
    searchBook: function(bookData) {
        return axios.get(GOOGLEURL + bookData + resultslimit);
    },

    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    getBooks: function() {
        return axios.get("/api/books");
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
  };