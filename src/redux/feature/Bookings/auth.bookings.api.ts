import baseApi from "../../api/baseApi"



const authApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
    getUsersBookins:builder.query({
        query:(userInfo)=>({
            url:'/bookings/user',
            method:'GET',
            body:userInfo
        })
    }),
    getAllBookings:builder.query({
        query:()=>({
            url:'/bookings',
            method:'GET',
            
        }),
        providesTags:['bookings']
    }),

    removeBooking:builder.mutation({
        query:(id)=>({
            url:`/bookings/${id}`,
            method:'DELETE',
           
        }),
        invalidatesTags: ['bookings']
    })
    })
})



export const {useGetUsersBookinsQuery,useGetAllBookingsQuery,useRemoveBookingMutation,useGetAllBookingsForAdminQuery}=authApi