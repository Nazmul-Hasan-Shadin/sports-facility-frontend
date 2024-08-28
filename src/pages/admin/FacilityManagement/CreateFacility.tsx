import { Button, Col, Form, Row } from "antd";
import React from "react";
import SFform from "../../../components/form/SFform/SFform";
import SFInput from "../../../components/form/SFInput/SFinput";
import Title from "antd/es/typography/Title";


const CreateFacility = () => {
    const [addFacility]=useCreate
    const onSubmit=(data)=>{
        console.log(data,'iam create faciiltiy');

        
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
        <Form.Item> <SFInput type="text" label="Facility Name" id="location" name="pricePerHour"/></Form.Item>
       <Form.Item> <SFInput type="text" label="Location" id="location" name="location"/></Form.Item>
       <Button htmlType="submit"> Create Facility </Button>

       </SFform>
      </Col>
    </Row>
  );
};

export default CreateFacility;
