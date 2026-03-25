import React from 'react';

const BusinessResults = ({ businesses }) => {
  return (
    <div>
      {businesses.map((business) => (
        <div key={business.id} className="business-card">
          <h2>{business.name}</h2>
          <p>{business.address}</p>
          <p>{business.phone}</p>
          <button onClick={() => window.open(`mailto:${business.email}`)}>Email</button>
        </div>
      ))}
    </div>
  );
};

export default BusinessResults;