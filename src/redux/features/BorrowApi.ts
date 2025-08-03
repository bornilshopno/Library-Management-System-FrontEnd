import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const BorrowApi=createApi({
    reducerPath: 'BorrowApi',
    baseQuery: fetchBaseQuery({
       baseUrl: 'http://localhost:3000/api'
        // baseUrl:'https://assignment-bay-theta.vercel.app/api'
    }),
    endpoints: (builder)=>({
        borrowRequest: builder.mutation({
            query:(borrowRequest)=>({
                url:'/borrow',
                method:"POST",
                body:borrowRequest
            })
        }),
        borrowSummary: builder.query({
            query:()=>'/borrow'
        })
    })
})

export const {useBorrowRequestMutation,useBorrowSummaryQuery} =BorrowApi