const allFoodFetch = async(showAllButton,searchInputText) => {
    const response = await fetch ('https://www.themealdb.com/api/json/v1/1/filter.php?i');
    const data = await response.json();
    if(showAllButton === true){
        loadFoodCards(data.meals);
    }
    else{
        loadFoodCards(data.meals.slice(0,6));
    }
}

allFoodFetch()

const loadFoodCards = (meals) => {
    const foodCardsContainer = document.getElementById('food-cards-container');
    foodCardsContainer.innerHTML = "";
    meals.forEach(meal => {
        const {strMeal,strMealThumb} = meal;
        const newDiv = document.createElement('div');
        newDiv.classList.add('flex', 'border', 'border-[#100F0F1A]', 'border-opacity-10', 'gap-6', 'rounded-lg');
        newDiv.innerHTML = `
        <div>
            <img class="w-[230px] rounded-t-lg h-full" src=${strMealThumb} alt="">
        </div>
        <div class="py-[51px] flex flex-col gap-6">
            <h2 class="text-[25px] font-bold text-[#403F3F]">${strMeal}</h2>
            <p class="text-lg text-[#706F6F]">There are many variations of passages of available, but the majority have suffered</p>
            <p class="font-semibold text-lg text-[#FFC107] underline">View Details</p>
        </div>
        `
        foodCardsContainer.appendChild(newDiv);
    });
}

const showAllButton = () => {
    allFoodFetch(true);
}

const searchButton = () => {
    const searchInputText = document.getElementById('search-input').value;
    document.getElementById('search-input').value = "";
    allFoodFetch(false,searchInputText);
}
