import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiCall = createApi({
  reducerPath: 'apiCall',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query<[],void>({
      query: () => {
        return {
          url: 'employee/all',
          method: 'GET'
        }
      },
    }),
  }),
});

export const { useGetAllEmployeesQuery } = apiCall;
export default apiCall;
