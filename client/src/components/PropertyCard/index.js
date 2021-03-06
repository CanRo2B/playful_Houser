import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { QUERY_ME } from "../../utils/queries";
import { QUERY_PROPERTY } from "../../utils/queries";
import { Card, Button } from 'react-bootstrap';
import "../../styles/app.css";
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg'



const PropertyCard = (props) => {
    const { loading, data} = useQuery(QUERY_PROPERTY)
    
    const propertyData = data?.properties || {};
   
    return ( 
<>
    {loading ? (
          <div>Loading...</div>
        ) : (
<Card className="col-5 p-4 m-3 effect" key="" border='dark'>
  <Card.Img src={Assets1} className= "rentalimage" alt="" variant='top' /> 
        <Card.Body>
          <Card.Title>{propertyData.nickname}</Card.Title>
          <p className='small'>{propertyData.due}</p>
          <Card.Text>{propertyData.rent}</Card.Text>
          <Card.Text>{propertyData.street}</Card.Text>
          <Card.Text>{propertyData.state}, {propertyData.state} {propertyData.zip}</Card.Text>
          <Button className='btn-block rentalbtn' onClick= "">
            I don't know what to put here
          </Button>
        </Card.Body>
      </Card>
      )
    }
    </>
) 
}

export default PropertyCard;

