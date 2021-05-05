import React from 'react';
import RecipeList from './RecipeList';

function App() {
  return (
    <div className="App">
      <RecipeList recipes={sampleRecipes}/>
    </div>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1.45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 1,
        name: "Salt",
        amount: "1 Table spoons",
      },
    ],
  },
  {
    id: 1,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0.45",
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounds",
      },
      {
        id: 1,
        name: "Paprika",
        amount: "2 Table spoons",
      },
    ],
  },
];

export default App;
