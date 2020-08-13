import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import Title from "./title/Title";
import Button from "./button/Button";
import Input from "./input/Input";
import Footer from "./footer/Footer";
import countries from "./inspirDatabase/inspirDatabase";
import RecipeCard from "./cards/recipeCards/recipeCard";
import FlagCard from "./cards/flagCards/flagCard";

function App() {


  //API
  const APP_ID = "455c883f";
  const APP_KEY = "30233125e8b15498f90de9425967fafc";


  //State
  const [recipes, setRecipes] = useState([]);
  const [flagMeals, setFlagMeals] = useState({ countries });
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [inspiration, setInspiration] = useState(false);
  const [recipeCards, setRecipeCards] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data);
      if (data.hits.length === 0 && query !== "") {
        setError(true);
        setRecipeCards(false);
      }
    };
    getRecipes();
  }, [query]);

  
  //Functions
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setInspiration(false);
    setRecipeCards(true);
    setError(false);
    setSearch("");
  };

  const findInspiration = () => {
    setInspiration(true);
    setError(false);
    setRecipeCards(false);
    console.log(flagMeals.countries);
  };

  const mealSearch = e => {
    setSearch(e.target.id);
    setQuery(e.target.id);
    setRecipeCards(true);
    setInspiration(false);
    setError(false);
    window.scrollTo(0, 0);
  };

  //--**Scroll to FlagCards**--//
  const scrollTo = ref => {
    if (ref /* + other conditions */) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const clickHomepage = e => {
    setRecipeCards(false);
    setError(false)
  }

  return (
    <>
      {recipeCards === true || error === true ? (
        <>
          <Header small>
            <div className="headerTwo">
              <div className="titleTwo">
                <h1 onClick={clickHomepage}>FEEDER</h1>
              </div>
              <form onSubmit={getSearch}>
                <div className="searchTwo">
                  <Input
                    type="text"
                    value={search}
                    onChange={updateSearch}
                    placeholder="Search for a meal"
                  />
                  <Button type="submit" />
                </div>
              </form>
            </div>
          </Header>
        </>
      ) : (
        <Header>
          <Title />
          <form onSubmit={getSearch}>
            <div className="searchOne">
              <Input
                type="text"
                value={search}
                onChange={updateSearch}
                placeholder="Search for a meal"
              />
              <Button type="submit" />
            </div>
          </form>
          <p className="link" onClick={findInspiration}>
            Need Inspiration?
          </p>
        </Header>
      )}

      {recipeCards === true ? (
        <>
          <div className="middle">
            <div className="results">
              <p>Showing {recipes.length} results</p>
            </div>
            <div className="r-cards">
              {recipes.map(recipe => (
                <RecipeCard
                  key={recipe.recipe.url}
                  title={recipe.recipe.label}
                  source={recipe.recipe.source}
                  image={recipe.recipe.image}
                  time={recipe.recipe.totalTime}
                  serving={recipe.recipe.yield}
                  ing={recipe.recipe.ingredients.length}
                  url={recipe.recipe.url}
                />
              ))}
            </div>
          </div>
          <Footer />
        </>
      ) : null}

      {error === true ? (
        <>
          <div className="middle">
            <div className="error">
              <h1>No recipes found :(</h1>
              <p>Please try another key word</p>
            </div>
          </div>
          <Footer />
        </>
      ) : null}

      {inspiration === true ? (
        <>
          <div ref={scrollTo} className="flagCards">
            <div className="flagContainer">
              <div className="top">
                <h1>Most Searched Recipes</h1>
                <h2>by Region/Cuisine</h2>
              </div>
              {flagMeals.countries.map(item => (
                <FlagCard
                  key={item.country}
                  country={item.country}
                  meals={item.meals}
                  image={item.image}
                  click={mealSearch}
                />
              ))}
            </div>
          </div>
          <Footer />
        </>
      ) : null}
    </>
  );
}

export default App;
