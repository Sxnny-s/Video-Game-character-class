// Make a video game class 

class Brawlhalla{

  constructor(name,attack,defense,dexterity,equippedWeapon,weapon1,weapon2,popularity,backStory){
    this.name = name
    this.attack = attack
    this.defense = defense
    this.dexterity = dexterity
    this.popularity = popularity
    this.weapon1 = weapon1
    this.weapon2 = weapon2
    this.backStory = backStory
    this.equippedWeapon = 'fist'
  }

  taunt(){
    console.log(`${this.name} is currently taunting`)
  }

  switchWeapons(){
    if(this.equippedWeapon == 'fist'){
        this.equippedWeapon = this.weapon1
        console.log(`${this.name} has equipped ${this.weapon1}`)

    }else if(this.equippedWeapon == this.weapon1){
        this.equippedWeapon = this.weapon2
        console.log(`${this.name} has equipped ${this.weapon2}`)
    }}

    unArm(){

        if(this.equippedWeapon == 'fist'){
            console.log(`${this.name} is currently unarmed`)
        }
        else{
            console.log(`${this.name} has unequipped ${this.equippedWeapon}`)
            this.equippedWeapon = 'fist'
        } 
    }


}