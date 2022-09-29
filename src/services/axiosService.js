import axios from '../utils/config/axios.config'

export default function getRandomUser() {
    return axios.get('/', {
        validateStatus: function (status) {
            return status < 500
        }
    })
}

