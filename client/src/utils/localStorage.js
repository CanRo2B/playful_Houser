export const getPropertyIds = () => {
  const savedPropertyIds = localStorage.getItem('saved_property')
    ? JSON.parse(localStorage.getItem('saved_property'))
    : [];

  return savedPropertyIds;
};

export const savePropertyIds = (propertyIdArr) => {
  if (propertyIdArr.length) {
    localStorage.setItem('saved_property', JSON.stringify(propertyIdArr));
  } else {
    localStorage.removeItem('saved_property');
  }
};

export const removePropertyId = (propertyId) => {
  const savedBookIds = localStorage.getItem('saved_property')
    ? JSON.parse(localStorage.getItem('saved_property'))
    : null;

  if (!savePropertyIds) {
    return false;
  }

  const updatedSavedPropertyIds = savedPropertyIds?.filter((savedPropertyId) => savedPropertyId !== propertyId);
  localStorage.setItem('saved_property', JSON.stringify(updatedSavedPropertyIds));

  return true;
};
