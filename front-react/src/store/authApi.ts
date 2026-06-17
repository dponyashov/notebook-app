import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type { ILoginData, IRegistrationData } from "../types/auth-types";

export const authApi = createApi({
        reducerPath: 'authApi',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
        tagTypes: ['Auth'],
        endpoints: (builder) => ({
            authUser: builder.query({
                query: (id: number) => `/users/${id}`,
                providesTags: (result, error, arg) => [
                    {type: 'Auth', id: arg}
                ]
            }),
            authLogin: builder.mutation({
                query: (body: ILoginData) => ({
                    url: `/auth/login`,
                    method: 'POST',
                    body: body
                }),
                invalidatesTags: ['Auth']
            }),
            authRefresh: builder.mutation({
                query: (body) => ({
                    url: `/auth/refresh`,
                    method: 'POST',
                    body: body
                }),
                invalidatesTags: ['Auth']
            }),
            authRegistration: builder.mutation({
                query: (body: IRegistrationData) => ({
                    url: `/auth/registration`,
                    method: 'POST',
                    body: body
                }),
                invalidatesTags: ['Auth']
            }),
            authLogout: builder.query({
                query: () => ({
                    url: `/auth/logout`
                }),
                providesTags: ['Auth']
            })
        })
    })
;

export const {
    useAuthLoginMutation,
    useAuthRefreshMutation,
    useAuthRegistrationMutation,
    useAuthLogoutQuery,
    useAuthUserQuery
} = authApi;