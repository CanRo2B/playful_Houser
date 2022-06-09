import React from "react";
import { Link } from 'react-router-dom';
import Properties from "../Properties";
import { Container, CardGroup, Button } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { QUERY_ME } from "../../utils/queries";
import PropertyCard from "../PropertyCard";
import "../../styles/app.css";


const Ownerportal = () => {
  // const {data} = useQuery(QUERY_USER);
  // let user;
  // if (data) {
  //   user= data.user;
  // }

  const { loading, data} = useQuery(QUERY_ME);
   
  const userData = data?.me || [];


  return (
    <>
    {loading ? (
          <div>Loading...</div>
        ) : (
    <div>
     
        <div fluid className="m-3 firstName">
          <h1>Hello, {userData.contact.firstName}</h1>
          <p>
            <Button bsstyle="primary" className="rentalbtn">Edit Contact Info</Button>
          </p>
        </div>
  

      <Container>
        <h2> Properties Listed
          {/* {userData.property.length
            ? `Viewing ${userData.property.length} saved ${userData.property.length === 1 ? 'property' : 'property'}:`
            : 'You have no properties listed!'} */}
        </h2>
        <CardGroup className="flex-row">
          {userData.property.map((property) => {
            // return (
            //  <PropertyCard />
            // );
            return ( 

              <Card className="col-5 p-4 affect" key="" border='dark'>
                <Card.Img src={Assets1} className= "rentalimage" alt="Rental Image" variant='top' /> 
                  <Card.Body>
                     <Card.Title>{propertyData.nickname}</Card.Title>
                  <p className='small'>{propertyData.due}</p>
                    <Card.Text>{propertyData.rent}</Card.Text>
                   <Card.Text>{propertyData.street}</Card.Text>
                    <Card.Text>{propertyData.state}, {propertyData.state}  {propertyData.zipcode}</Card.Text>
                   <Button className='btn-block btn-danger' onClick= "">
                     I don't know what to put here
                  </Button>
                  </Card.Body>
               </Card>
           ) 
          })}

        </CardGroup>   

      </Container>
    </div>
    //   ) : null
    // }
    // </div>
    )
  }
  </>
  );
};

export default Ownerportal;