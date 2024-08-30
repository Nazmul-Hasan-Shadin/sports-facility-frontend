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
import "./FacilityDetailsPage.css";
import React, { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
const { Title, Text } = Typography;

import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import {
  useCheckFacilityAvailabilityQuery,
  useGetSingleFacilityQuery,
} from "../../redux/feature/facillity/facility.auth.api";
import FacilityBanner from "../../components/ui/FacilityBanner/FacilityBanner";

const FacilityDetailsPage = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { facilityId } = useParams();
  const [selectedTime, setSelectedTime] = useState<{
    startTime: string;
    endTime: string;
  } | null>(null);
  const [shouldFetchSlots, setShouldFetchSlots] = useState<boolean>(false);

  const navigate = useNavigate();

  const dataParams = {
    date: selectedDate,
    facility: facilityId,
  };

  const { data: singleFacility, isLoading: singleFacilityLoading } =
    useGetSingleFacilityQuery(facilityId);

  const { data: availableSlot, isLoading } = useCheckFacilityAvailabilityQuery(
    dataParams,
    {
      skip: !selectedDate || !shouldFetchSlots,
    }
  );

  if (isLoading) {
    return <h2>loading</h2>;
  }

  if (singleFacilityLoading) {
    return <h2>loading</h2>;
  }

  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    const formattedDate = value.format("YYYY-MM-DD");
    setSelectedDate(formattedDate);
  };

  const handleTimeSelection = (slot) => {
    setSelectedTime({ startTime: slot.startTime, endTime: slot.endTime });
  };

  const handleBooking = () => {
    if (!selectedTime) {
      alert("Please select a time slot before booking.");
      return;
    }

    navigate("/pay", {
      state: { selectedTime, facilityId, selectedDate ,pricePerHour:singleFacility?.data?.pricePerHour},
    });
  };

  const handleCheckAvailableSlots = () => {
    if (!selectedDate) {
      alert("Please select a date first.");
      return;
    }
    setShouldFetchSlots(true);
  };

  return (
    <div className="p-5">
      <Row gutter={16}>
        <Col xs={24} md={16}>
          <Card>
            <div>
              <Title level={3}> {singleFacility?.data?.name} </Title>
              <div className="flex items-center gap-3">
                <Rate className="text-sm" defaultValue={2}></Rate>
                <Text>33 (Reviews)</Text>
                <div className="flex items-center gap-1">
                  <FaLocationCrosshairs /> {singleFacility?.data?.location}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Title level={5}>Pitch Type: Turf, Venue Type: Outdoor</Title>
              <Text>Opening Hours: 04:00 PM - 11:59 PM</Text>
            </div>

            {/* Dynamic banner */}
            <FacilityBanner image1={singleFacility?.data?.image} image2={''}></FacilityBanner>
          </Card>
        </Col>
        <Col className="border-green-600" xs={24} md={8}>
          <Card>
            <div className="text-center">
              <Title level={4}>Book a Field on Soccer World</Title>
              <Text>Select date and duration to show available slots</Text>
            </div>
            <div className="w-[300px]">
              <Calendar
                onChange={onPanelChange}
                fullscreen={false}
                className="mt-10"
                style={{
                  borderColor: '#00725A', // Accent color for borders and highlights
                }}
              />
            </div>
            <div className="mt-10 space-y-[14px]">
              <Text className="block">Match Duration</Text>
              <Space direction="horizontal">
                <Button className="bg-primary" type="primary">
                  90 Min
                </Button>
                <Button type="default">9 Min</Button>
              </Space>
              <Button
                onClick={handleCheckAvailableSlots}
                htmlType="submit"
                className="bg-secondary w-full text-white"
              >
                Show Available Slots
              </Button>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={24}>
          <Title className="text-center" level={3}>
            Available Time
          </Title>
          <div className="space-y-4">
            {availableSlot?.data && availableSlot.data.length > 0 ? (
              <div>
                <Row justify="center" align="middle" gutter={[22, 0]}>
                  {availableSlot.data.map((slot) => (
                    <Col span={3} key={slot._id}>
                      <Button
                        onClick={() => handleTimeSelection(slot)}
                        type="primary"
                        className={`bg-secondary ${
                          selectedTime &&
                          selectedTime.startTime === slot.startTime &&
                          selectedTime.endTime === slot.endTime
                            ? "selected"
                            : ""
                        }`}
                      >
                        {`${slot.startTime} - ${slot.endTime}`}
                      </Button>
                    </Col>
                  ))}
                </Row>
                <div className="flex justify-center mt-8">
                  <Button
                    type="primary"
                    className="bg-primary text-white"
                    onClick={handleBooking}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            ) : (
              <Text>No available slots for the selected date.</Text>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FacilityDetailsPage;
