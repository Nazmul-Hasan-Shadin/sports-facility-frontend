import React from "react";
import { useCreateAdminMutation } from "../../../redux/feature/createAdmin/createAdmin";
import { Button, Col, Form, Row } from "antd";
import Title from "antd/es/typography/Title";
import SFform from "../../../components/form/SFform/SFform";
import SFInput from "../../../components/form/SFInput/SFinput";
import { toast } from "sonner";

const CreateAdmin = () => {
  const [addAdmin] = useCreateAdminMutation();
  const onSubmit = async (data) => {
    console.log(data,'iam created adnim data');

    try {
      const res = await addAdmin(data);
      console.log(res);

      if (res.data.success) {
        toast.success("Admin has created succesful");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Row justify={"center"} align={"middle"}>
      <Col lg={10} className="p-8 shadow-lg rounded-lg bg-white" sm={12} md={6}>
        <Title level={4}> Make your New Admin </Title>
        <SFform onSubmit={onSubmit}>
          <Form.Item>
            {" "}
            <SFInput type="text" label="Facility Name" id="Name" name="name" />
          </Form.Item>
          <Form.Item>
            {" "}
            <SFInput type="email" label="Email" id="email" name="email" />
          </Form.Item>
          <Form.Item>
            {" "}
            <SFInput
              type="password"
              label="Password"
              id="password"
              name="password"
            />
          </Form.Item>
          <Form.Item>
            {" "}
            <SFInput type="number" label="Phone Num" id="phone" name="phone" />
          </Form.Item>
          <Form.Item>
            {" "}
            <SFInput type="text" label="Location" id="locatioin" name="address" />
          </Form.Item>
          <Button htmlType="submit"> Create Admin </Button>
        </SFform>
      </Col>
    </Row>
  );
};

export default CreateAdmin;
