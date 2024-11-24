const justFoodPerPerson = 300
const yourMamaPerPerson = 1000
const flavourHavenPerPerson = 5000

const justFood = (numberOfPeople) => {
    return "Catering od Just Food pro " + numberOfPeople + " lidí za " + numberOfPeople*justFoodPerPerson + " Kč."
}

const yourMama = (numberOfPeople) => {
    return "Catering od Your Mama pro " + numberOfPeople + " lidí za " + numberOfPeople*yourMamaPerPerson + " Kč."
}

const flavourHaven = (numberOfPeople) => {
    return "Catering od Flavour Haven pro " + numberOfPeople + " lidí za " + numberOfPeople*flavourHavenPerPerson + " Kč."
}

console.log(justFood(100))
console.log(yourMama(100))
console.log(flavourHaven(100))

const createEvent = (eventName, numberOfPeople, catering) => {
    return "Událost " + eventName + " s " + catering (numberOfPeople)
}

console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven))