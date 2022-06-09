import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { savePropertyIds, getSavedPropertyIds } from '../utils/localStorage';

// Use Apollo useMutation() hook to run the SAVE_BOOK mutation in the handleSaveBook() function
import { SAVE_PROPERTY } from '../utils/mutations';

// Keep the books ID to state in try catch

const SearchProperty = () => {
  // create state for holding returned google api data
  const [searchedProperty, setSearchedProperty] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedPropertyIds, setSavedPropertyIds] = useState(getSavedPropertyIds());

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => savePropertyIds(savedPropertyIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchProperty(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const propertyData = items.map((property) => ({
        propertyId: property.id,
        nickname: property.nickname,
        street: property.street,
        city: property.city,
        state: property.state,
        zipcode: property.zipcode,
        rent: property.rent,
        due: property.due,
        image: property.imageLinks?.thumbnail || '',
      }));

      setSearchedProperty(propertyData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveProperty = async (propertyId) => {
    // find the book in `searchedBooks` state by the matching id
    const propertySave = searchedProperty.find((book) => property.propertyId === propertyId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await SAVE_PROPERTY({variables: {...propertySave }, });

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if book successfully saves to user's account, save book id to state
      setSavedPropertyIds([...savedPropertyIds, propertyToSave.propertyId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Properties</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a property'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedProperty.length
            ? `Viewing ${searchedProperty.length} results:`
            : 'Search for a property to begin'}
        </h2>
        <CardColumns>
          {searchedProperty.map((property) => {
            return (
              <Card key={property.propertyId} border='dark'>
                {property.image ? (
                  <Card.Img src={property.image} alt={`The image for ${property.nickname} house`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{propertyData.nickname}</Card.Title>
                    <p className='small'>{propertyData.due}</p>
                    <Card.Text>{propertyData.rent}</Card.Text>
                    <Card.Text>{propertyData.street}</Card.Text>
                    <Card.Text>{propertyData.state}, {propertyData.state} {propertyData.zip}</Card.Text>
                      {Auth.loggedIn() && (
                    <Button
                      disabled={savedPropertyIds?.some((savedPropertyId) => savedPropertyId === property.propertyId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveProperty(property.propertyId)}>
                      {savedPropertyIds?.some((savedPropertyId) => savedPropertyId === property.propertyId)
                        ? 'This property is rented!'
                        : 'Rent this home!'}
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

export default SearchProperty;
