const form = document.getElementById('searchForm');
const result = document.getElementById('result');

let search = "";
let cocktails = [];

const fetchCocktail = async () => {
    cocktails = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/random.php`)
        .then((res) => res.json());
    console.log(cocktails);
};

const cocktailDisplay = async () => {
    await fetchCocktail();

    // cocktails.drinks.lenght = 12;

    // let details = document.querySelector('#result');
    result.innerHTML = cocktails.drinks.map((cocktail) => 
        `
        <li>
            <h2>${cocktail.strDrink}</h2>
            <img src="${cocktail.strDrinkThumb}"></img>
            <p class="description">${cocktail.strInstructions}</p>
            <p class="mesureIngredient">${cocktail.strIngredient1} : ${cocktail.strMeasure1}</p>
            <p class="mesureIngredient">${cocktail.strIngredient2} : ${cocktail.strMeasure2}</p>
            <p class="mesureIngredient">${cocktail.strIngredient3} : ${cocktail.strMeasure3}</p>
            <p class="mesureIngredient">${cocktail.strIngredient4} : ${cocktail.strMeasure4}</p>

        </li>
        `
    ).join("");

    // for(let i=1; i<=15; i++){

    //     if(cocktails.drinks[0][`strIngredient${i}`] == null){
    //             break;
    //         }
    //     let ingredient = document.createElement('li');
    //     ingredient.innerHTML = cocktails.drinks[0][`strIngredient${i}`] + ' : ' + cocktails.drinks[0][`strMeasure${i}`];

    //     details.appendChild(ingredient);
    // }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    cocktailDisplay();
});
