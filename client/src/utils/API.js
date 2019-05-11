import axios from "axios";
const GOOGLEURL = "https://www.googleapis.com/books/v1/volumes?q="
const resultslimit = "&maxResults=40"

//axios.defaults.port = 4000;

export default {
    searchBook: function(bookData) {
        return axios.get(GOOGLEURL + bookData + resultslimit);
    },

    saveBook: function(bookData) {

        return axios.post("/api/books", bookData);
        //axios.post('http://localhost:4000/api/books', bookData)
          //       .then(res => console.log(res.data));
    },

    getBooks: function() {
        return axios.get("/api/books");
    },
    
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
  };