import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { Card, CardGroup, Container, Button } from 'react-bootstrap';
import "../../styles/app.css";
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg'
import PropertyCard from "../PropertyCard";
import { QUERY_ME } from "../../utils/queries";



const Renterportal = () => {
    const { loading, data} = useQuery(QUERY_ME)
   
    const userData = data?.me || [];

  // const {data} = useQuery(QUERY_USER);
  // let user;
  // if (data) {
  //   user= data.user;
  // }

    return ( 
      // <div>
      // {user ? (
      <>
  <Container>
    <div fluid className="m-3">
      <h1>Hello,  {userData.contact.firstName} </h1>
        <p>
          <Button bsStyle="primary">Edit Contact Info</Button>
        </p>
    </div>
  </Container>
   
  <Container className= "">
    <CardGroup className="display-flex">
      {/* Identified by the tenant, the property they are attached to. */}
       <PropertyCard />
       {/* Property manager information */}
        <Card className="col-5 p-4" key="" border='dark'>
                <Card.Body>
                  <Card.Title>Owner Info</Card.Title>
                  <p className='small'>{userData.properties.due}</p>
                  <Card.Text>{userData.properties.rent}</Card.Text>
                  <Button className='btn-block btn-danger' onClick= "">
                    Contact Owner
                  </Button>
                </Card.Body>
              </Card>
        </CardGroup>
    </Container>
    <Container>
    <a href="#" className="btn btn-primary">Pay Rent</a>
    </Container>
      </>
    //   ) : null
    // }
    // </div>
)
};
export default Renterportal;

    {/* <div className="card flex-column flex-wrap">
        <div className="card-header border-0">
            <img className="rentalimage" src={Assets1} alt="Rental placeholder image"/>
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Street</p>
            <p classname="card-text">City, State Zipcode</p>
            <a href="mailto:canrob0522@gmail.com" className="btn btn-primary">Contact Owner</a>
        </div>
        <div className="w-100"></div>
        <div className="card-footer w-100 text-muted">
            Rent Amount
        </div>
    </div>
    <div className="card flex-column flex-wrap">
        <div className="card-header border-0">
            
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Street</p>
            <p classname="card-text">City, State Zipcode</p>
            <a href="mailto:canrob0522@gmail.com" className="btn btn-primary">Contact Owner</a>
        </div>
        <div className=""></div>
        <div className="card-footer text-muted">
            Rent Amount
        </div>
    </div> */}