import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';



const Home = () => {
  // const { loading, data } = useQuery(QUERY_USER);
  // const profiles = data?. || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <img src="client/src/assets/blake-wheeler-zBHU08hdzhY-unsplash.jpg" />
        </div>
      </div>
    </main>
  );
};

export default Home;
