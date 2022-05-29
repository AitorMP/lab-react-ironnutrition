import { useState } from 'react';
import React from 'react';

const AddFood = (props) => {
  const [showFood, setShowFood] = useState(false);

  // We create states for each component within the object
  const [foodName, setFoodName] = useState('');
  const [foodCalories, setFoodCalories] = useState(0);
  const [urlImg, setUrlImg] = useState('');

  //We create the handles for each event
  const handleChangeName = (event) => setFoodName(event.target.value);
  const handleFoodCalories = (event) => setFoodCalories(event.target.value);
  const handleImageChange = (event) => setUrlImg(event.target.value);

  const handleFormSubmision = (event) => {
    event.preventDefault();
    const newFood = {
      name: foodName,
      calories: foodCalories,
      image: urlImg,
    };

    props.handleAddFood(newFood);

    //We reset the value
    setFoodName('');
    setFoodCalories(0);
    setUrlImg('');
    setShowFood(false);
  };

  return (
    <div>
      {/* We create a button that will show the form to and input the values */}
      <button onClick={() => setShowFood(true)}>Add food</button>

      {showFood ? (
        <form onSubmit={handleFormSubmision}>
          <input
            type="Text"
            name="foodName"
            value={foodName}
            onChange={handleChangeName}
          />
          <input
            type="number"
            name="countCal"
            value={foodCalories}
            onChange={handleFoodCalories}
          />
          <input
            type="text"
            name="urlImg"
            alt="image"
            value={urlImg}
            onChange={handleImageChange}
          />

          {/* We create a button that will hide the form */}
          <input type="submit" value="Submit" />
        </form>
      ) : null}
    </div>
  );
};

export default AddFood;
