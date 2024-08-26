import React from "react";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";
import FeaturedFacility from "./FeaturedFacility";

const { Title } = Typography;

// Sample data for featured facilities
const facilities = [
  {
    id: 1,
    name: "Basketball Court",
    description: "A standard basketball court with seating and scoreboard.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
  {
    id: 2,
    name: "Tennis Court",
    description:
      "Well-maintained tennis courts for competitive and casual play.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
  {
    id: 3,
    name: "Swimming Pool",
    description: "An Olympic-size pool with lap lanes and diving boards.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
  {
    id: 4,
    name: "Gymnasium",
    description:
      "Fully equipped gym with cardio and strength training machines.",
    image: "https://via.placeholder.com/300x200", // Replace with your image URL
  },
];

const FeaturedFacilities = () => {
  return (
    <div className="featured-facilities" style={{ padding: "20px" }}>
      <Title className="text-start">Featured Facility</Title>
      <Row gutter={12}>
        {facilities.map((facility) => (
          <Col span={24} md={8} lg={6}>
            <FeaturedFacility />{" "}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedFacilities;
