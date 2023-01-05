<<<<<<< HEAD
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:1337/api/'
    }),
    endpoints(build){
        return{
            register:build.mutation({
                query(user){
                    return{
                        url:'auth/local/register',
                        method:"post",
                        body:user
                    }
                }
            }),

            login:build.mutation({
                query(user){
                    return{
                        url:'auth/local',
                        method:'post',
                        body:user
                    }
                }
            })
        }
    }
})

=======
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:1337/api/'
    }),
    endpoints(build){
        return{
            register:build.mutation({
                query(user){
                    return{
                        url:'auth/local/register',
                        method:"post",
                        body:user
                    }
                }
            }),

            login:build.mutation({
                query(user){
                    return{
                        url:'auth/local',
                        method:'post',
                        body:user
                    }
                }
            })
        }
    }
})

>>>>>>> f8907f6e6a169033ec0202fb4ead9f2d7650ae32
export const {useRegisterMutation,useLoginMutation} = authApi