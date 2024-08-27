import baseApi from "../../api/baseApi"



const authApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
    getUsersBookins:builder.query({
        query:(userInfo)=>({
            url:'/bookings/user',
            method:'GET',
            body:userInfo
        })
    })
    })
})


export const {useGetUsersBookinsQuery}=authApi