import React from "react";
import { Card, Col, Row, Typography, Rate, Button } from "antd";
import { FaUserFriends } from "react-icons/fa"; // For 6v6 icon or similar icons
import { TFacility } from "../../types";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

const FacilityCard = ({ facility }) => {
  const { description, name, pricePerHour ,_id} = facility;
  return (
    <Col>
      <Card
        hoverable
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          padding: 4,
          border: "1px solid #e8e8e8",
        }}
        bodyStyle={{ padding: "12px 16px" }}
      >
        <Row gutter={16} align="middle" className="flex gap-4">
          {/* Image Section */}
          <Col xs={7} md={8}>
            <img
              src="	https://cdn.malaebapp.com/images/stadium/1154/small"
              alt="The Village Football"
              style={{ width: "100%", height: "160px", objectFit: "contain" }}
            />
          </Col>
          {/* Content Section */}
          <Col xs={12} md={12}>
            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="flex justify-between items-center mb-1">
                <Title level={5}  className="mb-0">
                 {name}
                </Title>
                <div className="flex items-center">
                  {
                    <Text  className="font-bold"> $ {  pricePerHour }</Text>
                  }
                 
                </div>
              </div>
              <div className="flex items-center mb-1">
                <Text className="mr-2">1 Pitches</Text>
                <FaUserFriends size={18} /> <Text>6v6</Text>
              </div>

              <Link to={`/facility/${_id}`}>
              <Button
                type="default"
                className="bg-gray-200 text-green-700"
                style={{
                  padding: "0 10px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Book From <span style={{ color: "#1a9500" }}>View Details</span>
              </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default FacilityCard;
