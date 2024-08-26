import { FieldValues, SubmitHandler } from "react-hook-form";
import SFInput from "../components/form/SFInput/SFinput";
import SFform from "../components/form/SFform/SFform";
import { Button, Col, Divider, Form, Row, Space } from "antd";
import { Typography } from "antd";
import { calc } from "antd/es/theme/internal";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
const { Title, Text } = Typography;

const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Row
      justify={"center"}
      align={"middle"}
      className="lg:bg-gradient-to-r lg:from-[#00725A] lg:to-[#FFA500]"
      style={{ height: "calc(100vh - 93px)" }}
    >
      <Col
        className="p-8 shadow-lg rounded-lg bg-white"
        sm={12}
        md={6}
        style={{ minWidth: "300px" }}
      >
        <SFform onSubmit={onSubmit}>
          <Title style={{ color: "#00725A" }} level={2} className="text-white">
            Sign In
          </Title>
          <Row gutter={[0, 20]}>
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
                className="text-xs text-secondary"
                style={{ float: "right", paddingTop: "9px" }}
              >
                <a href="#" className="hover:underline">
                  Forgot Password?
                </a>
              </Text>
            </Col>

            <Col span={24}>
              <Form.Item className="">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#00725A",
                    borderColor: "#00725A",
                    width: "100%",
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
            <Col span={24} >
            <Divider style={{ marginTop: "-18px" }}>sign up</Divider>
              <Divider style={{ marginTop: "-0px" }}>or</Divider>
              <div className="flex justify-center ">
                <Space align="center" className="text-2xl" size={"large"}>
                  <FaGithub />
                  <FcGoogle />
                  <IoLogoFacebook />
                </Space>
              </div>
            </Col>
          </Row>
        </SFform>
      </Col>
    </Row>
  );
};

export default Login;
