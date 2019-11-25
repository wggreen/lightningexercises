//write a function that accepts the foodArray as an argument 
// and returns a new array containing only the foods 
// that begin with the letter a and the letter t
const foodArray = ["pizza", "anchovies", "burgers","artichokes", "muffins", "french fries", "apples","tamales", "curry", "tomatoes", "corn", "tamarind"]

const myFavoriteFoods = (array) => {
    let newArray = []
    for(let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element.startsWith("a") || element.startsWith("t")) {
            newArray.push(element)
        }
    }
    return newArray
}

console.log(myFavoriteFoods(foodArray))