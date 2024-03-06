document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const mealContainer = document.getElementById('meal-container');
  
    async function getRandomMeal() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      return data.meals[0];
    }
  
    function displayMeal(meal) {
      mealContainer.innerHTML = ''; 
  
      const mealImage = document.createElement('img');
      mealImage.src = meal.strMealThumb;
      mealContainer.appendChild(mealImage);
  
      const mealName = document.createElement('h2');
      mealName.textContent = meal.strMeal;
      mealContainer.appendChild(mealName);
  
      const mealInstructions = document.createElement('p');
      mealInstructions.textContent = meal.strInstructions;
      mealContainer.appendChild(mealInstructions);
    }
  
    searchButton.addEventListener('click', async function() {
      await searchMeal();
    });
  
    searchInput.addEventListener('keypress', async function(event) {
      if (event.key === 'Enter') {
        await searchMeal();
      }
    });
  
    async function searchMeal() {
      const searchQuery = searchInput.value.trim();
      if (searchQuery) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
        const data = await response.json();
        if (data.meals) {
          displayMeal(data.meals[0]);
        } else {
          mealContainer.innerHTML = '<p>No meals found. Please try again.</p>';
        }
      } else {
        mealContainer.innerHTML = '<p>Please enter a search query.</p>';
      }
    }
  
    getRandomMeal().then(displayMeal);
  });
  