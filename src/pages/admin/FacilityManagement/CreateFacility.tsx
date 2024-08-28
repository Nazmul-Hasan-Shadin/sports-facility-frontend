import { Button, Col, Form, Row } from "antd";
import React from "react";
import SFform from "../../../components/form/SFform/SFform";
import SFInput from "../../../components/form/SFInput/SFinput";
import Title from "antd/es/typography/Title";
import { useCreateFacilityMutation } from "../../../redux/feature/facillity/facility.auth.api";
import { toast } from "sonner";


const CreateFacility = () => {
    const [addFacility]=useCreateFacilityMutation()
    const onSubmit=async(data)=>{
        const facilityData={
            name:data.name,
            pricePerHour:Number(data.pricePerHour),
            description:data.description,
            location:data.location
        }
        console.log(facilityData);
        
       try {
        const res=await addFacility({...facilityData})
        console.log(res);
        
        if (res.data.success) {
            toast.success('Facility has created succesful')
        }
       } catch (error) {
         toast.error(error.message)
       }


        
    }
  return (
    <Row justify={'center'} align={'middle'}>
      <Col lg={10}         className="p-8 shadow-lg rounded-lg bg-white"
        sm={12}
        md={6}>
        <Title level={3}> Create Facility</Title>
       <SFform onSubmit={onSubmit}>
      <Form.Item>  <SFInput type="text" label="Facility Name" id="Name" name="name"/></Form.Item>
      <Form.Item>  <SFInput type="text" label="Description" id="Name" name="description"/></Form.Item>
        <Form.Item> <SFInput type="number" label="PricePerHour" id="PricePerHour" name="pricePerHour"/></Form.Item>
       <Form.Item> <SFInput type="text" label="Location" id="location" name="location"/></Form.Item>
       <Button htmlType="submit"> Create Facility </Button>

       </SFform>
      </Col>
    </Row>
  );
};

export default CreateFacility;
