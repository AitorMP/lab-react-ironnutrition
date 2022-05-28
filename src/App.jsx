import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      {foods.map((food, index) => {
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
  );
}

export default App;
