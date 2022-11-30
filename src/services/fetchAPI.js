export const fetchIngredients = async (search, location) => {
  if (location.pathname === '/meals') {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes;
  }
  if (location.pathname === '/drinks') {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`;
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes;
  }
};

export const fetchName = async (search, location) => {
  if (location.pathname === '/meals') {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes;
  }
  if (location.pathname === '/drinks') {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
    const response = await fetch(url);
    const recipes = await response.json();
    return recipes;
  }
};

export const fetchFirstLetter = async (search, location) => {
  try {
    if (location.pathname === '/meals') {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
      const response = await fetch(url);
      const recipes = await response.json();
      return recipes;
    }
    if (location.pathname === '/drinks') {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;
      const response = await fetch(url);
      const recipes = await response.json();
      return recipes;
    }
  } catch (error) {
    console.log(error);
  }
};
