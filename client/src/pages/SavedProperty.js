import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
// import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removePropertyId } from '../utils/localStorage';
import { REMOVE_TENANT } from '../utils/mutations';



// Use the useQuery() to execute the GET ME query on load and save it to a variable name userData
const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
 
  const userData = data?.me || [];

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteProperty = async (propertyId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await REMOVE_TENANT({variables: {...propertyId, token}, });

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // const updatedUser = await response.json();
    
      // upon success, remove book's id from localStorage
      removePropertyId(propertyId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved property!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedProperty.length
            ? `Viewing ${userData.savedProperty.length} saved ${userData.savedProperty.length === 1 ? 'property' : 'properties'}:`
            : 'You have no properties!'}
        </h2>
        <CardColumns>
          {userData.savedProperty.map((property) => {
            return (
              <Card key={property.propertyId} border='dark'>
                {property.image ? <Card.Img src={property.image} alt={`The image is for ${property.nickname}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{propertyData.nickname}</Card.Title>
                    <p className='small'>{propertyData.due}</p>
                    <Card.Text>{propertyData.rent}</Card.Text>
                    <Card.Text>{propertyData.street}</Card.Text>
                    <Card.Text>{propertyData.state}, {propertyData.state} {propertyData.zip}</Card.Text>
                      {Auth.loggedIn() && (
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteTenant(Property.propertyId)}>
                        Delete this Property!
                    </Button>
                      )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
