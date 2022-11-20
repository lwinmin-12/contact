import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const APIService = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://go.contact.mmeducare.com/api/v1",
    }),
    endpoints:(builder)=>({})
})
export default APIService