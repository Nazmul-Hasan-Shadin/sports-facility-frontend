import { Button, Card, Col, Rate } from "antd";
import { Link } from "react-router-dom";
import demoImage from '../../../assets/featuredpos/stadoi.jpeg'

const FeaturedFacility = ({facility}) => {
  const {name,description,_id}=facility;
  
   console.log(facility);
   
  return (
    <Col span={24} md={8} lg={6}>
      <Card
      
        cover={
          <img style={{width:'300', height:'300'}}
            alt="example"
            src={demoImage}
          />
        }
      >
        <Card.Meta
          title={ 
            <div className="flex justify-between">
               <span>{name}</span>
               <Rate className="text-sm" allowHalf defaultValue={3}/>
            </div>
          }

          description={
            description
          }
        ></Card.Meta>
        

       <Link to={`/facility/${_id}`}> <Button className="bg-primary text-white mt-5" type="default">View Details</Button></Link>
      </Card>
    </Col>
  );
};

export default FeaturedFacility;
