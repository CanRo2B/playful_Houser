import * as React from 'react';
// import Card from 'react-bootstrap/Card';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import { QUERY_PROPERTY } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import PropertyCard from '../PropertyCard';
import "../../styles/app.css";
import Assets2 from '../../assets/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg'

const Properties = () => {
  // const { loading, data } = useQuery(QUERY_PROPERTY);
 
  // const userData = data?.property || [];


  return (
    <>
    <Container>
        <h2> Propert Information
          
        </h2>
        <CardGroup>
          
             <PropertyCard />

             <Card className="col-5 p-4" key="" border='dark'>
                <Card.Body>
                  <Card.Title>Tenant Name</Card.Title>
                  <p className='small'>Rent: 1200</p>
                  <Card.Text>Rent Due</Card.Text>
                  <Button className='btn-block btn-danger' onClick= "">
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
              
        </CardGroup>   
    </Container> 
    </>
  );
};

export default Properties;