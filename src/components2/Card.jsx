import React from 'react';

const Card = ({ id, title, description }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <div className="p-4 hover:bg-gray-100 transition duration-300 ease-in-out ">
        <p className="text-gray-600 ">ID: {id}</p>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-black-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;