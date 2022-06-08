import * as React from 'react';
// import Card from 'react-bootstrap/Card';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import { QUERY_PROPERTY } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import "../../styles/app.css";
import Assets2 from '../../assets/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg'

const Properties = () => {
  // const { loading, data } = useQuery(QUERY_PROPERTY);
 
  // const userData = data?.property || [];


  return (
    <>
    {/* <Container>
        <h2>
          {userData.property.length
            ? `Viewing ${userData.property.length} saved ${userData.property.length === 1 ? 'property' : 'property'}:`
            : 'You have no properties listed!'}
        </h2>
        <CardGroup>
          {userData.property.map((property) => {
            return (
              <Card key={property._id} border='dark'>
                {property.image ? <Card.Img src={property.image} alt={`The cover for ${property.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{property.title}</Card.Title>
                  <p className='small'>Rent: {property.rent}</p>
                  <Card.Text>{property.due}</Card.Text>
                  {/* <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(property._id)}>
                    Delete this Book!
                  </Button> */}
                {/* </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </Container> */} 
      <Container>
    <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
            <img className="rentalimage" src={Assets2} alt="Rental placeholder image"/>
        </div>
        <div className="card-block px-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Street</p>
            <p classname="card-text">City, State Zipcode</p>
            <a href="mailto:canrob0522@gmail.com" className="btn btn-primary">Contact Tenant</a>
        </div>
        <div className="w-100"></div>
        <div className="card-footer w-100 text-muted">
            Rent Amount
        </div>
    </div>
    </Container>
    </>
  );
};

export default Properties;