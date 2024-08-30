import React, { useState } from "react";
import { Button, Col, Form, Modal, Popconfirm, Row, Space, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useGetUsersBookinsQuery } from "../../../redux/feature/Bookings/auth.bookings.api";
import {
  useGetAllFacilityQuery,
  useLazyGetAllFacilityQuery,
  useRemoveFacilityMutation,
  useUpdateFacilityMutation,
} from "../../../redux/feature/facillity/facility.auth.api";
import Title from "antd/es/typography/Title";
import { FaEdit, FaTrash } from "react-icons/fa";
import SFform from "../../../components/form/SFform/SFform";

import SFInput from "../../../components/form/SFInput/SFinput";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  description: string;
  address: string;
}

const Facility: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<DataType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facility } = useGetAllFacilityQuery({ undefined });
  console.log(facility, "iam prqo facility");

  const [removeFaility] = useRemoveFacilityMutation();
  const { data: allBookings, refetch } = useGetUsersBookinsQuery(undefined);
  const handleDelete = async (id: React.Key) => {
    try {
      await removeFaility(id).unwrap();
    
    } catch (error) {
      console.error("Failed to delete booking:", error.message);
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      render: (text) => <a style={{ color: "#00725A" }}>{text}</a>,
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "address",
      width: 200,
    },
    {
      title: "Price",
      dataIndex: "pricePerHour",
      key: "payableAmount",
      width: 200,
      render: (text) => <span style={{ color: "orange" }}>${text}</span>,
    },
    {
      title: "Action",
      dataIndex: "X",
      key: "x",
      render: (_, item) => {
        console.log("iamrecord", item);

        return (
          <div className="flex gap-4">
            <Popconfirm
              title="Are you sure you want to delete this item?"
              onConfirm={() => handleDelete(item.key)}
            >
             <FaTrash style={{ color: "orange" }} className="text-xl" />
              
              
            </Popconfirm>

            <FaEdit
              onClick={() => {
                setSelectedFacility(item);
                setIsModalOpen(true);
              }}
              className="text-xl text-primary"
            />
          </div>
        );
      },
      width: 100,
    },
  ];

  const data: DataType[] =
    facility?.data.map(
      ({ location, name, pricePerHour, _id, description, image }) => ({
        key: _id,

        description,
        location,
        name,
        pricePerHour,
        image,
      })
    ) || [];

  return (
    <div
      style={{ overflowX: "auto", padding: "20px", backgroundColor: "#f9f9f9" }}
    >
      <Title level={3}>All Facility</Title>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: "max-content" }}
      />

      {selectedFacility && (
        <FacilityEditModal
          isOpen={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          facilityData={selectedFacility}
        />
      )}
    </div>
  );
};

export default Facility;

export const FacilityEditModal = ({ isOpen, onOk, onCancel, facilityData }) => {
  console.log("inside modal", facilityData.key);

  const [updateFacility] = useUpdateFacilityMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const facilityInfo = {
      data: {
        ...data,
        id: facilityData._id,
        pricePerHour: Number(data.pricePerHour),
      },
      id: facilityData?.key,
    };
    console.log(facilityInfo);

    const res = await updateFacility(facilityInfo);
    if (res.data.success) {
      toast.success("Facility has updated");
    }
  };

  return (
    <div>
      <Modal title="Basic Modal" open={isOpen} onOk={onOk} onCancel={onCancel}>
        <Row justify={"center"}>
          <Col
            lg={24}
            className="p-8 shadow-lg rounded-lg bg-white"
            sm={23}
            md={14}
          >
            <Title level={3}> Create Facility</Title>
            <SFform onSubmit={onSubmit}>
              <Form.Item>
                {" "}
                <SFInput
                  defaultValue={facilityData?.name}
                  type="text"
                  label="Facility Name"
                  id="Name"
                  name="name"
                />
              </Form.Item>
              <Form.Item>
                {" "}
                <SFInput
                  defaultValue={facilityData?.description}
                  type="text"
                  label="Description"
                  id="Name"
                  name="description"
                />
              </Form.Item>
              <Form.Item>
                {" "}
                <SFInput
                  defaultValue={facilityData?.pricePerHour}
                  type="number"
                  label="PricePerHour"
                  id="PricePerHour"
                  name="pricePerHour"
                />
              </Form.Item>

              <Form.Item>
                <SFInput
                  defaultValue={facilityData?.image}
                  type="text"
                  label="Image"
                  id="Image"
                  name="image"
                />
              </Form.Item>
              <Form.Item>
                {" "}
                <SFInput
                  defaultValue={facilityData?.location}
                  type="text"
                  label="Location"
                  id="location"
                  name="location"
                />
              </Form.Item>
              <Button htmlType="submit"> Create Facility </Button>
            </SFform>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};
