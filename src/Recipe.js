import React from 'react';
import style from './recipe.module.css';
const Recipe = ({key, title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map ( ingredient => (
          <li>{ingredient.text}</li>
          ))}
      </ul>
      <p>Calories: {Math.round(calories)}</p>
    </div>
  );
}

export default Recipe;