import React from 'react';
import { Layout, Typography, Row, Col, Card, Button, Image } from 'antd';
import image1 from '../assets/contact.png'

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;


const AboutPage = () => {
  return (
    <Layout>
      {/* Header Section */}
      <Header style={{ background: '#00725A', padding: '0 20px', textAlign: 'center' }}>
        <Title level={2} style={{ color: 'white', margin: 0 }}>
          About Us
        </Title>
      </Header>

  
      <Content style={{ padding: '40px', background: '#f0f2f5' }}>
        <Row gutter={[32, 32]} justify="center">
         
          <Col span={24}>
            <Card bordered={false} style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <Title level={3} style={{ color: '#00725A', textAlign: 'center' }}>
                Welcome to Our Sports Facility Booking Platform
              </Title>
              <Paragraph style={{ fontSize: '16px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                Our platform connects sports enthusiasts with top facilities, making it easy to find and book your preferred sports venue with just a few clicks. Whether you're looking for a football pitch, tennis court, or swimming pool, we have the right place for you.
              </Paragraph>
            </Card>
          </Col>

          {/* Mission Section */}
          <Col xs={24} md={12}>
            <Image
              src={image1}
              alt="Sports Facility"
              style={{ borderRadius: '10px', width: '100%', maxHeight: '300px', objectFit: 'cover' }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Card bordered={false} style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <Title level={4} style={{ color: '#00725A' }}>Our Mission</Title>
              <Paragraph>
                Our mission is to provide a seamless booking experience for sports enthusiasts, promoting active lifestyles by connecting people to quality sports facilities. We aim to make sports more accessible to everyone.
              </Paragraph>
              <Button
                type="primary"
                style={{ backgroundColor: '#00725A', borderColor: '#00725A', color: 'white' }}
              >
                Explore Facilities
              </Button>
            </Card>
          </Col>

          {/* Vision Section */}
          <Col span={24}>
            <Card bordered={false} style={{ borderRadius: '10px', padding: '20px', marginTop: '20px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                  <Title level={4} style={{ color: '#00725A' }}>Our Vision</Title>
                  <Paragraph>
                    We envision a world where everyone has access to the sports facilities they need, regardless of location. By making bookings easier, we hope to inspire more people to participate in sports and enjoy a healthier lifestyle.
                  </Paragraph>
                </Col>
                <Col xs={24} md={12}>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_d-wRErGFunnl5ZnDN4_H5xApabswm7HH8Q&s"
                    alt="Active Lifestyle"
                    style={{ borderRadius: '10px', width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer Section */}
      <Footer style={{ textAlign: 'center', backgroundColor: '#00725A', color: 'white' }}>
     Sports Facility 2023
      </Footer>
    </Layout>
  );
};

export default AboutPage;
