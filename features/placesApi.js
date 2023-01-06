import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const placeSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.jsonkeeper.com' }),
    // The "endpoints" represent operations and requests for this server
    endpoints: builder => ({
      // The `getPosts` endpoint is a "query" operation that returns data
      getPlaces: builder.query({
        // The URL for the request is '/fakeApi/posts'
        query: () => '/b/5NPS'
      })
    })
  })

  export const { useGetPlacesQuery } = placeSlice


