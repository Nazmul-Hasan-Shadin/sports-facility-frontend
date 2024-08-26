import { Card, Col } from "antd";


const FeaturedFacility = ({facility}) => {
  const {name,description}=facility;
  
   console.log(facility);
   
  return (
    <Col span={24} md={8} lg={6}>
      <Card
        cover={
          <img style={{width:'300', height:'300'}}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Card.Meta
          title={name}
          description={
            description
          }
        ></Card.Meta>
      </Card>
    </Col>
  );
};

export default FeaturedFacility;
