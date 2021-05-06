import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';


const RecipeEdit = () => {
  return (
    <div className="recipe-edit">
      <div>
        <button>&times;</button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="name">Cook Time</label>
        <input type="text" name="cookTime" id="cookTime" />
        <label htmlFor="name">Servings</label>
        <input type="number" min="1" name="servings" id="servings" />
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <br />
      <label htmlFor="">Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
        {/* {Ingredient Components} */}
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  );
}

export default RecipeEdit
