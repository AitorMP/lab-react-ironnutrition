import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

function App() {
  const [filteredFoodArr, setFilteredFoodArr] = useState(foods);

  const addShowFood = (newFood) => setFilteredFoodArr([...foods, newFood]);
  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <AddFood handleAddFood={addShowFood} />
      <div className="search-bar">{/* <SearchFood handleSearch /> */}</div>

      <div>
        {filteredFoodArr.map((food, index) => {
          const { name, image, calories, quantity } = food;

          return (
            <FoodBox
              key={index}
              name={name}
              image={image}
              calories={calories}
              quanitiy={quantity}
            ></FoodBox>
          );
        })}
      </div>
    </div>
  );
}

export default App;
