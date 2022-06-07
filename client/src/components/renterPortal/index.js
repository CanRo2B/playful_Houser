import React, { useState } from "react";
import ReactDOM from "react-dom";
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
// import ReactDataGrid from "react-data-grid";
import { Jumbotron, Container, Button } from 'react-bootstrap';
import "../../styles/app.css";



const Renterportal = () => {
    // const { loading, data} = useQuery(QUERY_ME)

    // const useData = data?.me || [];

    return (
      <>
    <Jumbotron fluid className="text-light bg-dark">
      <h1>Hello, world!</h1>
        <p>
           This is a simple hero unit, a simple jumbotron-style component for calling
           extra attention to featured content or information.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
    </Jumbotron>
      </>
)
};
export default Renterportal;

