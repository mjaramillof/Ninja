class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`The name of ninja is: ${this.name}`);
    }
    showStats(){
        console.log(`The stats of the ninja are: Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health +=10;
    }
}
const ninja1 = new Ninja('Hyabusa', 100, 'medium', 90);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
const ninja2 = new Ninja('Kenshin', 90, 'high', 100);
ninja2.sayName();
ninja2.showStats();