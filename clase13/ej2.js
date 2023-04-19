class myHero {
    constructor(name = `vegeta`) {
    this.name = name 
    this.ranking = 00
    this.health = 100
    this.damage = 5
    this.experience = 0
    }


talk(name){
    console.log(`¡Hola! ${name}`)
}

attack(power){
    console.log(`Poder: ${power}`)
}

takeDamage(damage){
    this.health -= damage
    console.log(`Vida restante: ${this.health}`)
}
}
