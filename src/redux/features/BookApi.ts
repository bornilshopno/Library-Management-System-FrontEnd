import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BookApi = createApi({
    reducerPath: "BookApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api'
        // baseUrl:'https://assignment-bay-theta.vercel.app/api'
    }),
    endpoints: (build) => ({
        getBooks: build.query({
            query: () => '/books'
        }),
        getBooksByID: build.query({
            query: (id) => ({ url: `/books/${id}` }),
        })
    }),
})

export const { useGetBooksQuery, useGetBooksByIDQuery } = BookApi