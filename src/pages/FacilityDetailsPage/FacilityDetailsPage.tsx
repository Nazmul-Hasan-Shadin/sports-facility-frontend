import {
  Button,
  Calendar,
  Card,
  Col,
  Rate,
  Row,
  Space,
  Typography,
} from "antd";
import React, { useState } from "react";
import { FaFootball, FaLocationCrosshairs } from "react-icons/fa6";
import { useParams } from "react-router-dom";
const { Title, Text } = Typography;

import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import { useCheckFacilityAvailabilityQuery } from "../../redux/feature/facillity/facility.auth.api";

const FacilityDetailsPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { facilityId } = useParams();

  // console.log(facilityId, selectedDate,'iam both');

  const dataParams = {
    date: selectedDate,
    facility: facilityId,
  };

  const { data, refetch } = useCheckFacilityAvailabilityQuery(dataParams, {
    skip: !selectedDate,
  });

  const onPanelChange = async (
    value: Dayjs,
    mode: CalendarProps<Dayjs>["mode"]
  ) => {
    const formattedDate = value.format("YYYY-MM-DD");
    setSelectedDate(formattedDate);
  };

  return (
    <div className="p-5 ">
      <Row gutter={16}>
        {/* left side items */}
        <Col  xs={24} md={16}>
          {/* rating and review card */}
          <Card>
            <div>
              <Title level={3}>Tenis Ball</Title>

              <div className="flex items-center gap-3">
                <Rate className="text-sm" defaultValue={2}></Rate>
                <Text>33(Reviews)</Text>
                <div className="flex items-center gap-1">
                  <FaLocationCrosshairs /> Bahrain, Riffa
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Title level={5}>Pitch Type: Turf, Venue Type: Outdoor</Title>
              <Text>Opening Hours: 04:00 PM - 11:59 PM</Text>
            </div>

            {/* image */}
            <img
              src="https://via.placeholder.com/600x400"
              alt="Soccer World"
              style={{ width: "100%", marginTop: "20px", height: "390px" }}
            />
          </Card>
        </Col>
        {/* right side   */}
        <Col className="border-green-600" xs={24} md={8}>
          <Card>
            <div className=" text-center">
              <Title level={4}>Book a Filed on Soccer World</Title>
              <Text>Select date and duration to show available slots</Text>
            </div>
            <div className="w-[300px] ">
              <Calendar
                onChange={onPanelChange}
                fullscreen={false}
                className="mt-10 "
              />
            </div>

            {/* DURATION  */}
            <div className="mt-10 space-y-[14px]">
              <Text className="block ">Match Duartion</Text>
              <Space direction="horizontal">
                <Button className="bg-primary" type="primary">
                  90 Min
                </Button>
                <Button type="default">9 Min</Button>
              </Space>

              <Button
                htmlType="submit"
                className="bg-secondary w-full text-white "
              >
                Show Available Slots
              </Button>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={24}>
          <Title className="text-center" level={3}> Available Time</Title>
          <div className="space-y-4">
            <Row
             
              justify={"center"}
              align={"middle"}
              gutter={[22, 0]}
            >
              <Col span={3}>
                <Button type="primary" className="bg-secondary">
                  9:00 am - 10:pm
                </Button>
              </Col>
              <Col span={3}>
                <Button type="primary" className="bg-secondary">
                  9:00 am - 10:pm
                </Button>
              </Col>

              <Col span={3}>
                <Button type="primary" className="bg-secondary">
                  9:00 am - 10:pm
                </Button>
              </Col>
              <Col span={3}>
                <Button type="primary" className="bg-secondary">
                  9:00 am - 10:pm
                </Button>
              </Col>
              <Col span={3}>
                <Button type="primary" className="bg-secondary">
                  9:00 am - 10:pm
                </Button>
              </Col>
            </Row>

            <Row gutter={[22, 0]} justify={"center"}>
              <Col span={3}>
                <Button type="primary" className="bg-secondary">
                  9:00 am - 10:pm
                </Button>
              </Col>
              <Col span={3}>
                <Button type="primary" className="bg-secondary">
                  9:00 am - 10:pm
                </Button>
              </Col>

              <Col span={3}>
                <Button type="primary" className="bg-secondary">
                  9:00 am - 10:pm
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FacilityDetailsPage;
