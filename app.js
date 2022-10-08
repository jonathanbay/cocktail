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

    cocktails.drinks.lenght = 12;

    result.innerHTML = cocktails.drinks.map((cocktail) => 
        `
        <li>
            <h2>${cocktail.strDrink}</h2>
            <img src="${cocktail.strDrinkThumb}"></img>
            <p class="description">${cocktail.strInstructions}</p>
        </li>
        `
    ).join("");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    cocktailDisplay();
});
