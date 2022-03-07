import axios from 'axios';
import { API_BASE_URL } from '@env';

export default {
    getUser: async function () {
        const id = "62004d8d842f6e16ca613eea"

        return await axios.get(`${API_BASE_URL}/users/${id}`,{
            // headers: {
            //     'Content-Type': 'application/json',
            //     'authorization': 'Bearer ' + localStorage.getItem("token")
            // }
        })
        .then(response => response.data)
    },
}