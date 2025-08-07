import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BookApi = createApi({
    reducerPath: "BookApi",
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:3000/api'
        baseUrl: 'https://assignment-bay-theta.vercel.app/api'
    }),
    tagTypes:["BOOKS"],
    endpoints: (build) => ({
        getBooks: build.query({
            query: () => '/books',
            providesTags:["BOOKS"]
        }),

        getPagedBooks: build.query({
            query: ({ page = 1, limit = 10 }) => `/books/pagedBooks?page=${page}&limit=${limit}`,
            providesTags:["BOOKS"]
        }),
        getBooksByID: build.query({
            query: (id) => ({ url: `/books/${id}` }),
            providesTags:["BOOKS"]
        }),
        createBook: build.mutation({
            query: (newBook) => ({
                url: '/books',
                method: "POST",
                body: newBook
            }),
            invalidatesTags:["BOOKS"]
        }),
        updateBook: build.mutation({
            query: (data) => {
                const { id, ...updatedBook } = data;
                return {
                    url: `/books/${id}`,
                    method: "PUT",
                    body: updatedBook
                }
            },
            invalidatesTags:["BOOKS"]
        })
        ,
        deleteBook: build.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags:["BOOKS"]
        })
    }),
})

export const { useGetBooksQuery, useGetPagedBooksQuery,useGetBooksByIDQuery, useCreateBookMutation, useDeleteBookMutation, useUpdateBookMutation } = BookApi