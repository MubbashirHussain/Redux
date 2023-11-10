import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const Adminapi = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    reducerPath: "Api",

    endpoints: (build) => ({
        getAccount: build.query({
            query: (path: string) => (path),
            providesTags: <any[]>["accounts"]
        }),
        AddAccount: build.mutation({
            query: (props) => ({
                url: `accounts`,
                method: "POST",
                body: { ...props }
            }),
            invalidatesTags: <any[]>['accounts']
        }),
        SetAccount: build.mutation({
            query: ({ id, balance }) => ({
                url: `accounts/${id}`,
                method: "PUT",
                body: { balance }
            }),
            invalidatesTags: <any[]>['accounts']
        }),
        DeleteAccount: build.mutation({
            query: (id) => ({
                url: `accounts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: <any[]>['accounts']
        }),
    })


})

export const { useGetAccountQuery, useAddAccountMutation, useDeleteAccountMutation, useSetAccountMutation, } = Adminapi
