import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9bdf44fd-2ece-425b-8078-fce4c541d9df"
    }
})

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 20) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        })
    }
}

export const followAPI = {
    getFollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getUnfollow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
}