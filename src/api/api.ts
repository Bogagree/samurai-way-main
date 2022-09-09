import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e4310913-ee1d-4f45-afb2-bf32043c1264'
    }
})

export const usersAPI = {
    getUsers(pageNumber: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(res => {
            return res.data
        })
    },
    followUser(userId:number) {
        return instance.post(`follow/${userId}`,{})
    },
    unFollowUser(userId:number) {
        return instance.delete(`follow/${userId}`,)
    }
}

// export const followAPI = {
//     followUser(userId:number) {
//         return instance.post(`follow/${userId}`,{})
//     },
//     unFollowUser(userId: number) {
//         return instance.delete(`follow/${userId}`,)
//     }
// }
