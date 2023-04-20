class Hero {
    constructor(name = `vegeta`) {
    this.name = name 
    this.ranking = 0
    this.health = 100
    this.damage = 5
    this.experience = 0
    }


talk(name){
    console.log(`¡Hola! ${name}`)
}

attack(power){
    console.log(`Poder: ${power}`)
    this.experience += 10 
}

takeDamage(damage){
    this.health -= damage
    console.log(`Vida restante: ${this.health}`)
}
}

const createNewHero = ({name}) => new Hero(name)

const myHero = createNewHero ({ name: 'Vegeta'})

console.log(myHero.name)
myHero.talk('Nicolas')
myHero.attack(15)
myHero.takeDamage(15)