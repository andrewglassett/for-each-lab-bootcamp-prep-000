function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  const foods = ["taco", "burrito", "pizza", "noodles"]
  foods.forEach(callback)
  return foods
};

function doToArray(array, callback) {
  array.forEach(callback)
}
