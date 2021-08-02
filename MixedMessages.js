//Program that will generate random animal facts

//Arrays containing random strings to sample from
const animals = ["Squirrel","Dog","Chimpanzee","Ox","Lion","Panda","Walrus","Otter","Mouse","Kangaroo","Goat","Horse","Monkey","Cow","Koala","Mole","Elephant","Leopard","Hippopotamus","Giraffe","Fox","Coyote","Hedgehog","Sheep","Deer"]
const geoPrefix = ["British","Ugandan","Equitorian","Sub-Saharan","Austrailian","North American","German","French","Portugese","Scandinavian","Chinese","Fresh Water","Himalayan","Andoran","Brazilian","Artic","Guinean","Coastal"]
const genPrefix = ["Great","Horned","Elder","Spotted","Aged","Thrasing","Mute","Spine Ridged","Burrowing","Domesticated","Household","Hunting"]
const quality = ["Length","Height","Weight"]

const generateAnimal = () => {
    const generic = genPrefix[Math.floor(Math.random()*genPrefix.length)]
    const geographic = geoPrefix[Math.floor(Math.random()*geoPrefix.length)]
    const animal = animals[Math.floor(Math.random()*animals.length)]
    return `${geographic} ${generic} ${animal}`
}
for (i=0;i<10;i++) {
    console.log(generateAnimal())
}
