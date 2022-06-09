import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { Card, CardGroup, Container, Button, Form, Modal } from 'react-bootstrap';
import "../../styles/app.css";
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg'
import PropertyCard from "../PropertyCard";
import { QUERY_ME } from "../../utils/queries";



const Renterportal = (props) => {
    const { loading, data} = useQuery(QUERY_ME);
   
    const userData = data?.me || [];
    useEffect(()=> {
      console.log(userData)
    },[userData])
  // const {data} = useQuery(QUERY_USER);
  // let userData;
  // if (data) {
  //   userData= data.user;
  // }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      // <div>
      // {user ? (
      <>
      {loading ? (
          <div>Loading...</div>
        ) : (
    <div>
  <div>
    <div className="m-3 firstName">
      <h1>Hello,  {userData.contact.firstName} </h1>
        <p>
          <Button bsstyle="primary" className="rentalbtn">Edit Contact Info</Button>
        </p>
    </div>
  </div>
   
  <Container className= "">
    <div className="display-flex renterbox">
    {/* <CardGroup className="display-flex"> */}
      {/* Identified by the tenant, the property they are attached to. */}
       <PropertyCard />
       {/* Property manager information */}

       <Card className="col-5 p-4 m-3 affect" key="" border='dark'>
            <Card.Img src={Assets1} className= "rentalimage" alt="Rental Image" variant='top' /> 
              <Card.Body>
                <Card.Title>{userData.properties[0].nickname}</Card.Title>
                <p className='small'>{userData.properties[0].due}</p>
                <Card.Text>Rent Amount: ${userData.properties[0].rent}</Card.Text>
                <Card.Text>{userData.properties[0].street}</Card.Text>
                <Card.Text>{userData.properties[0].state}, {userData.properties[0].state} {userData.properties[0].zipcode}</Card.Text>
                <Button className='btn-block rentalbtn'>
                  I don't know what to put here
                </Button>
                  {/* {isTenant ?  <a href="/stripe">Pay Rent</a> : <a href="property/:propertyId">Property/Tenant Info</a>} */}
              </Card.Body>
          </Card>
          
        <Card className="col-5 p-4 m-3 affect" key="" border='dark'>
                <Card.Body>
                  <Card.Title>Owner Info</Card.Title>
                  <p className='small'>{userData.properties.due}</p>
                  <Card.Text>{userData.properties.rent}</Card.Text>
                  <Button className='btn-block rentalbtn' href="" onClick= "">
                    Contact Owner
                  </Button>
                </Card.Body>
              </Card>
        {/* </CardGroup> */}
        </div>
    </Container>

    <Container>
    <a href="#" className="btn btn-primary pay">Pay Rent</a>
    </Container>
    {/* Modal for edit contact info*/}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstName"
                placeholder="Sam"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastName"
                placeholder="Smith"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="street"
                placeholder="123 Main Street"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="city"
                placeholder="Orlando"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="state"
                placeholder="Florida"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control
                type="zipcode"
                placeholder="12345"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Primary Phone Number</Form.Label>
              <Form.Control
                type="phone1"
                placeholder="(555-555-1234)"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Label>Secondary Phone Number</Form.Label>
              <Form.Control
                type="phone2"
                placeholder="(555-555-4321)"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  };
  </>
)
};
//   ) : null
    // }
    // </div>

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