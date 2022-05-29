import React, { useState } from 'react';

const SearchFood = (props) => {
  const [searchFood, setSearchFood] = useState('');

  const handleSearch = (event) => {
    setSearchFood(event.target.value);
    props.handleSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" name="" onChange={handleSearch} value={searchFood} />
    </div>
  );
};

export default SearchFood;
