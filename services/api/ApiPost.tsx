import axios from 'axios';
import posts from '../../datatest/posts';

const burl = "http://localhost:3333";

export default {
    getPosts: async function () {
        const id = "62004d8d842f6e16ca613eea"
        // return posts
        return await axios.get(`${burl}/user/${id}/posts`,{
            // headers: {
            //     'Content-Type': 'application/json',
            //     'authorization': 'Bearer ' + localStorage.getItem("token")
            // }
        })
        .then(response => response.data)
    },

    addPost: function (post:any) {
        const data = {content: post}
    },
}