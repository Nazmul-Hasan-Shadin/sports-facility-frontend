import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import { Typography } from "antd";
import FeaturedFacility from "./FeaturedFacility";
import { TFacility } from "../../../types";
import { useGetAllFacilityQuery } from "../../../redux/feature/facillity/facility.auth.api";

const { Title } = Typography;

const FeaturedFacilities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const {
    data: featuredFacility,
    isLoading,
    isFetching,
  } = useGetAllFacilityQuery({ searchTerm, limit, page });
  console.log(featuredFacility);

  return (
    <div className="featured-facilities" style={{ padding: "20px" }}>
      <Title className="text-start">Featured Facility</Title>
      <Row gutter={12}>
        {featuredFacility?.data?.map((facility: TFacility) => (
          <FeaturedFacility facility={facility} key={facility._id} />
        ))}
      </Row>
    </div>
  );
};

export default FeaturedFacilities;
