import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "@/redux/features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:<>",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// wrapper for base query
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      "</refresh endpoint>",
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      const user = api.getState().auth.user;

      //   store new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      //   retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
