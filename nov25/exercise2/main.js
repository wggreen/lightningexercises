//Declare three variables (eyeColor, hairColor, height). If eyeColor is blue and hairColor is red and height is 6ft, console log the string template `red hair, blue eyes, and 6ft tall, otherwise console log "not a match"

const eyeColor = "blue"
const hairColor = "red"
const height = "6ft"

if (eyeColor === "blue" && hairColor === "red" && height === "6ft") {
    console.log(`${hairColor} hair, ${eyeColor} eyes, and ${height} tall`)
}
else {
    console.log("not a match")
}