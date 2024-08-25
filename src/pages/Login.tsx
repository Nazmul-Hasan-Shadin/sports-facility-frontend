import { FieldValues, SubmitHandler } from "react-hook-form";
import SFInput from "../components/form/SFInput/SFinput";
import SFform from "../components/form/SFform/SFform";
import { Button, Col, Form, Row, Space } from "antd";
import { Typography } from "antd";
const { Title, Text } = Typography;

const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Row justify={"center"} align={"middle"} className="h-[100vh]">
      <Col    className="p-8 shadow-lg rounded-lg bg-white" sm={12} md={6} style={{ minWidth: '300px' }} >
        <SFform onSubmit={onSubmit}>
          <Title level={2} className="text-white">
            Sign In
          </Title>
          <Row gutter={[0, 23]}>
            <Col span={24}>
              <SFInput label="Email" name="email" type="text" id="email" />
            </Col>
            <Col span={24}>
              <SFInput
                label="Password"
                name="password"
                type="password"
                id="password"
              />
              <Text
                className="text-xs dark:text-zinc-300"
                style={{ float: "right", marginTop: "9px" }}
              >
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </Text>

              <Form.Item className="mt-16">
                <Button
                  type="primary"
                  htmlType="submit"
                  className=" rounded-md bg-sky-500 hover:bg-sky-600 dark:bg-sky-700"
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </SFform>
      </Col>
    </Row>
  );
};

export default Login;
