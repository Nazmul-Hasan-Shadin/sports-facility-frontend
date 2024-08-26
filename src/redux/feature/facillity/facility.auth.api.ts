import baseApi from "../../api/baseApi";

const facilityApi=baseApi.injectEndpoints({
   endpoints:(builder)=>({
    getAllFacility:builder.query({
        query:(args)=>{
            console.log(args,'iam args');
            
            return {
               
                    url:'/facility',
                    method:'GET'
                    
                
            }
        }
    })
   })
})


export const {useGetAllFacilityQuery}=facilityApi