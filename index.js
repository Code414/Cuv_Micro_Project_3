//Read json data from file
const foodData = require('./food.json');

//list all the food items
function listAllFoodItems(){
    return foodData;
}

//list all the food items with category vegetables
function listVegetableItems(){
    return foodData.filter((food) => food.category === 'Vegetable');
}

//list all the food items with category fruit
function listFruitItems(){
    return foodData.filter((food) => food.category === 'Fruit');
}


//list all the food items with category protien
function listProteinItems(){
    return foodData.filter((food) => food.category === 'Protein');
}

//list all the food items with category nuts
function listNutsItems(){
    return foodData.filter((food) => food.category === 'Nuts');
}

//list all the food items with category grains
function listGrainsItems(){
    return foodData.filter((food) => food.category === 'Grain');
}

//list all the food items with category dairy
function listDairyItems(){
    return foodData.filter((food) => food.category === 'Dairy');
}

//list all the food items with with calorie above 100
function listCalorieAboveThan100Items(calorie){
    return foodData.filter((food) => food.calorie > 100);
}

//list all the food items with calorie below 100
function listCalorieLessThan100Items(calorie){
    return foodData.filter((food) => food.calorie < 100);
}

//list all the food items with highest protien content to lowest
function listHightoLowProteinItems(calorie){
    return foodData.sort((a,b) => b.proteins - a.proteins);
}


//list all the food items with lowest cab content to highest
function listLowtoHighCabItems(calorie){
    return foodData.sort((a,b) => a.cab - b.cab);
}



//Output
console.log("All food items:");
console.log(listAllFoodItems);

console.log("All food items with category vegetable:");
console.log(listVegetableItems());

console.log("All food items with category fruit:");
console.log(listFruitItems());

console.log("All food items with categoryprotein:");
console.log(listProteinItems());

console.log("All food items with category nuts:");
console.log(listNutsItems());

console.log("All food items with category grains:");
console.log(listGrainsItems());

console.log("All food items: with category dairy");
console.log(listDairyItems());

console.log("All food items with calorie above 100:");
console.log(listCalorieAboveThan100Items(100));

console.log("All food items with calorie below 100:");
console.log(listCalorieLessThan100Items(100));

console.log("All food items with highest protein content to lowest:");
console.log(listHightoLowProteinItems());

console.log("All food items with lowest cab content to highest:");
console.log(listLowtoHighCabItems());

