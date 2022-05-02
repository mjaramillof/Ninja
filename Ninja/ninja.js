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
        console.log(`The stats of the ninja are: Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health +=10;
    }
}

class Sensei extends Ninja{
        constructor(name) {
            super(name, 210, 10, 120);
        }
        speakWisdom() {
            console.log('Lo que un programador puede hacer en un mes, 2 programadores pueden hacerlo en dos meses.');
        }
        sakeSensei(){
            const sake = super.drinkSake();
            console.log(sake);
        }
    }

const ninja1 = new Ninja('Hyabusa', 100, 8, 90);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
const ninja2 = new Ninja('Kenshin', 90, 9, 100);
ninja2.sayName();
ninja2.showStats();
const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();