class Hero {
    constructor(name = `vegeta`) {
    this.name = name 
    this.ranking = 0
    this.health = 100
    this.damage = 5
    this.experience = 0
    this.isAlive = true
    }


talk(name){
    console.log(`¡Hola! ${name}`)
}

attack(power, objectiveHero){
    console.log(`Poder: ${power}`)
    objectiveHero.takeDamage(power)

    if(objectiveHero.isAlive === false){
        this.experience += 10 
    }

}

takeDamage(damage){
    this.health -= damage

this.health = Math.max(this.health, 0)

    if(this.health === 0){
        this.isAlive = false
    }
    console.log(`Vida restante: ${this.health}`)
}
}

const createNewHero = ({name}) => new Hero(name)

const vegeta = createNewHero ({ name: 'Vegeta'})
const carlos = createNewHero ({ name: 'Carlos'})

while(vegeta.isAlive && carlos.isAlive){
    vegeta.attack(15, carlos)
    carlos.attack(12, vegeta)
}

if(vegeta.isAlive){
    console.log('Vegeta ganó')
}
else{
    console.log('Carlos ganó')
}