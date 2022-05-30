import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFood from './components/SearchFood';

function App() {
  //We filter the different estates that we will need.
  const [filteredFoodArr, setFilteredFoodArr] = useState(foods);
  const [todaysFoods, setTodaysFoods] = useState([]);

  //
  const addShowFood = (newFood) => setFilteredFoodArr([...foods, newFood]);

  //Filter for the food search
  const filterByString = (stringSearch) => {
    const filteredFoodArr = foods.filter((food) => {
      return food.name.toLowerCase().includes(stringSearch.toLowerCase());
    });
    setFilteredFoodArr(filteredFoodArr);
  };

  //
  const addTodaysFoods = (foodObject) => {};

  return (
    <div className="App">
      <h1>Iron Nutrition</h1>
      <AddFood handleAddFood={addShowFood} />

      <div className="search-bar">
        <SearchFood handleSearch={filterByString} />
      </div>

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
              addTodaysFoods={addTodaysFoods}
            ></FoodBox>
          );
        })}
      </div>
    </div>
  );
}

export default App;
