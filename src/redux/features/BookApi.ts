import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BookApi=createApi({
    reducerPath: "BookApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://assignment-bay-theta.vercel.app/api'}),
    endpoints:(build)=>({
        getBooks: build.query({
            query: ()=>'/books'
        })
    }),
})

export const {useGetBooksQuery} =BookApi