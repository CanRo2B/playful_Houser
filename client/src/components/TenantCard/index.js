import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { QUERY_ME } from "../../utils/queries";
import { QUERY_PROPERTY } from "../../utils/queries";
import { Card, Button } from 'react-bootstrap';
import "../../styles/app.css";
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg'



const TenantCard = () => {
    const { loading, data} = useQuery(QUERY_PROPERTY)
    
    const propertyData = data?.properties || {};
   
    return ( 

<Card className="col-5 p-4 m-3 effect" key="" border='dark'>
  <Card.Img src={Assets1} className= "rentalimage" alt="" variant='top' /> 
        <Card.Body>
          <Card.Title>{propertyData.tenants.firstName} {propertyData.tenants.lastName}</Card.Title>
          <p className='small'>{propertyData.due}</p>
          <Card.Text>{propertyData.rent}</Card.Text>
          <Card.Text>{propertyData.tenants.street}</Card.Text>
          <Card.Text>{propertyData.tenants.state}, {propertyData.state} {propertyData.tenants.zip}</Card.Text>
          <Card.Text>{propertyData.tenants.phone1}</Card.Text><Card.Text>{propertyData.tenants.phone2}</Card.Text>
          <Button className='btn-block rentalbtn' onClick= "">
           Change Tenant Info
          </Button>
        </Card.Body>
      </Card>
) 
}

export default TenantCard;

