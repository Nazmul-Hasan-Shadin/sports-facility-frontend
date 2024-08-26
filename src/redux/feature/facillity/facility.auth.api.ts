import baseApi from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: (args) => {
        console.log(args, "iam args");

        return {
          url: "/facility",
          method: "GET",
        };
      },
    }),

    checkFacilityAvailability: builder.query({
        query: ({date,facility}) => {
         console.log(facility,'iam insdide retk query');
         
  
          return {
            url: "/check-availability",
            method: "GET",
            params: {date:date , facility:facility}
          };
        },
      }),
  }),
});

export const { useGetAllFacilityQuery,useCheckFacilityAvailabilityQuery } = facilityApi;
