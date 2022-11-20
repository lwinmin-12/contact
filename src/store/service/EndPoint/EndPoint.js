import APIService from "../APIServie"

const AuthEndPoint = APIService.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body : data
            })
        })
    })
})
export const {useLoginMutation} = AuthEndPoint
