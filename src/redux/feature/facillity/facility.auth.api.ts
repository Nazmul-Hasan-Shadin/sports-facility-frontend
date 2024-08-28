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

    getSingleFacility: builder.query({
      query: (facilityId) => {
       

        return {
          url: `/facility/${facilityId}`,
          method: "GET",
        };
      },
    }),


    checkFacilityAvailability: builder.query({
        query: ({date,facility}) => {
      
         
  
          return {
            url: "/check-availability",
            method: "GET",
            params: {date:date , facility:facility}
          };
        },
      }),

      createFacility: builder.mutation({
        query: (data) => {
        
         
  
          return {
            url: `/facility`,
            method: "POST",
            body:data
          };
        },
      }),

      updateFacility: builder.mutation({
        query: ({id,data}) => {
         console.log(id,data);
         
         
  
          return {
            url: `/facility/${id}`,
            method: "PUT",
            body:data
          };
        },
      }),
      deleteFacility: builder.mutation({
        query: (facilityId) => {
         console.log(data,'iam insdide deleted query');
         
  
          return {
            url: `/facility/${facilityId}`,
            method: "DELETE",
          
          };
        },
      }),
  }),
});

export const { useGetAllFacilityQuery,useCheckFacilityAvailabilityQuery,useUpdateFacilityMutation,useDeleteFacilityMutation ,useGetSingleFacilityQuery,useCreateFacilityMutation} = facilityApi;
