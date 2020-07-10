import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyDPPlksvP-2NWQbSrsruAJb7UexJoMPNBA";

export default {

    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    },

    getBooks: function () {
        return axios.get("/api/books");
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    },

    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

};
