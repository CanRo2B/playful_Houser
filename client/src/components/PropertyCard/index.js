import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { QUERY_ME } from "../../utils/queries";
// import ReactDataGrid from "react-data-grid";
import { Jumbotron, Card, CardGroup, Container, Button } from 'react-bootstrap';
// import Panel from 'react-bootstrap/Panel';
import "../../styles/app.css";
import Assets1 from '../../assets/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg'



const PropertyCard = () => {
    const { loading, data} = useQuery(QUERY_ME)
    
    const userData = data?.me?.contact || {};
   
    return ( 

<Card className="col-5 p-4" key="" border='dark'>
<Card.Img src={Assets1} className= "rentalimage" alt="" variant='top' /> 
        <Card.Body>
          <Card.Title></Card.Title>
          <p className='small'>Small House</p>
          <Card.Text>Rent Due</Card.Text>
          <Button className='btn-block btn-danger' onClick= "">
            Delete this Book!
          </Button>
        </Card.Body>
      </Card>
) 
}

export default PropertyCard;

