import { useEffect, useState } from "react";

const Homepage = () => {
  const [recipes, setRecipes] = useState([]);
//   const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://recipe-api-mk.herokuapp.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  }, []);

  return (
    <ul>
      {recipes.map((recipe, i) => (
          <li key={i}>
            <h1>{recipe.title}</h1>
            <p>Servings: {recipe.servings}</p>
            <p>Prep time: {recipe.prepTime}</p>
            <p>Cook time: {recipe.cookTime}</p>
            <p>Category: {recipe.category}</p>
          </li>
      ))}
    </ul>
  );
};

export default Homepage;
