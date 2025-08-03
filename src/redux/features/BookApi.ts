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
        }),
        createBook: build.mutation({
            query: (newBook) => ({
                url: '/books',
                method: "POST",
                body: newBook
            })
        }),
        updateBook: build.mutation({
            query: (data) => {
                const { id, ...updatedBook } = data;
                return {
                    url: `/books/${id}`,
                    method: "PUT",
                    body: updatedBook
                }
            }
        })
        ,
        deleteBook: build.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            })
        })
    }),
})

export const { useGetBooksQuery, useGetBooksByIDQuery, useCreateBookMutation, useDeleteBookMutation, useUpdateBookMutation } = BookApi