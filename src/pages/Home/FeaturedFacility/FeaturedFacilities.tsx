import React from "react";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";
import FeaturedFacility from "./FeaturedFacility";
import { useGetAllFacilityQuery } from "../../../redux/feature/facillity/facility.auth.api";
import { TFacility } from "../../../types";

const { Title } = Typography;

// Sample data for featured facilities

const FeaturedFacilities = () => {
  const {
    data: featuredFacility,
    isLoading,
    isFetching,
  } = useGetAllFacilityQuery(undefined);
  console.log(featuredFacility);

  return (
    <div className="featured-facilities" style={{ padding: "20px" }}>
      <Title className="text-start">Featured Facility</Title>
      <Row  gutter={12}>
        {featuredFacility?.data?.map((facility:TFacility) => (
          <FeaturedFacility facility={facility} key={facility._id}/>
        ))}
      </Row>
    </div>
  );
};

export default FeaturedFacilities;
