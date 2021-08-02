//Program that will generate random animal facts

//Arrays containing random strings to sample from
const animals = ["Squirrel","Dog","Chimpanzee","Ox","Lion","Panda","Walrus","Otter","Mouse","Kangaroo","Goat","Horse","Monkey","Cow","Koala","Mole","Elephant","Leopard","Hippopotamus","Giraffe","Fox","Coyote","Hedgehog","Sheep","Deer"]
const geoPrefix = ["British","Ugandan","Equitorian","Sub-Saharan","Austrailian","North American","German","French","Portugese","Scandinavian","Chinese","Fresh Water","Himalayan","Andoran","Brazilian","Artic","Guinean","Coastal"]
const genPrefix = ["Great","Horned","Elder","Spotted","Aged","Thrasing","Mute","Spine Ridged","Burrowing","Domesticated","Household","Hunting"]
const quality = ["height","weight","lifespan"]
const unit =["meters","kilograms","years"]

const generateAnimal = () => {
    const generic = genPrefix[Math.floor(Math.random()*genPrefix.length)]
    const geographic = geoPrefix[Math.floor(Math.random()*geoPrefix.length)]
    const animal = animals[Math.floor(Math.random()*animals.length)]
    return `${geographic} ${generic} ${animal}`
}
/*
for (i=0;i<10;i++) {
    console.log(generateAnimal())
}
*/
const generateHeight = () => {
    return (1.50 + Math.floor(Math.random()*250)/100)
}
const generateWeight = () => {
    return (80 + Math.floor(Math.random()*200))
}
const generateLifespan = () => {
    return 20 + Math.floor(Math.random()*100)
}
const funcArray = [generateHeight,generateWeight,generateLifespan]

const generatePhrase = () => {
    measurementChoice = Math.floor(Math.random()*3)
    console.log(`The ${generateAnimal()} has a ${quality[measurementChoice]} that can reach a whopping ${funcArray[measurementChoice]()} ${unit[measurementChoice]}.`)
}

generatePhrase()