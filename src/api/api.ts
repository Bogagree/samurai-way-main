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
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`,)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string) {
        return instance.put('profile/status', {status})
    },

}


