import { Card } from "antd";
import React from "react";

const FeaturedFacility = () => {
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Card.Meta
        title={"Iam title "}
        description={
          "Swimingo folo with goog and cheap price hurry up or you will miss it . Quick bor i need also maony"
        }
      ></Card.Meta>
      
    </Card>
  );
};

export default FeaturedFacility;
