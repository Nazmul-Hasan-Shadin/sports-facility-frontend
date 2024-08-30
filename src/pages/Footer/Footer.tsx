import React from 'react';
import { Row, Col, Typography, Space, Divider } from 'antd';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const { Text, Title } = Typography;

const Footer = () => {
  return (
    <footer className="bg-[#00725A] text-white py-10 px-8 flex justify-center">
     <div>
     <Row gutter={[32, 32]} justify="center" className="">
        {/* Logo and About Section */}
        <Col xs={24} md={8}>
          <Title level={4} className="text-white font-semibold">
            Sportify Booking
          </Title>
          <Text className="text-gray-200 block mt-2">
            Your one-stop platform for booking top sports facilities with ease and convenience. Enjoy a seamless booking experience with us.
          </Text>
        </Col>

        {/* Quick Links Section */}
        <Col xs={24} md={8}>
          <Title level={4} className="text-white font-semibold">
            Quick Links
          </Title>
          <Space direction="vertical" size="small" className="mt-2">
            <Text className="text-gray-300 cursor-pointer hover:text-[#FFA500] transition-all duration-300">Home</Text>
            <Text className="text-gray-300 cursor-pointer hover:text-[#FFA500] transition-all duration-300">About Us</Text>
            <Text className="text-gray-300 cursor-pointer hover:text-[#FFA500] transition-all duration-300">Facilities</Text>
            <Text className="text-gray-300 cursor-pointer hover:text-[#FFA500] transition-all duration-300">Contact</Text>
          </Space>
        </Col>

        {/* Social Media Section */}
        <Col xs={24} md={8}>
          <Title level={4} className="text-white font-semibold">
            Follow Us
          </Title>
          <Space size="middle" className="mt-2">
            <a href="#" className="text-white hover:text-[#FFA500] transition-all duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#FFA500] transition-all duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#FFA500] transition-all duration-300">
              <FaInstagram size={20} />
            </a>
          </Space>
        </Col>
      </Row>
      <Divider className="bg-gray-400 opacity-50 my-8" />
      <Row justify="center">
        <Col>
          <Text className="text-gray-300">
            © {new Date().getFullYear()} Sportify Booking. All rights reserved.
          </Text>
        </Col>
      </Row>
     </div>
    </footer>
  );
};

export default Footer;
