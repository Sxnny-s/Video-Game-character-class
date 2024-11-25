# Brawlhalla Character Creation Class

This project demonstrates how to create and manage a video game character using a JavaScript class. The `Brawlhalla` class allows for the creation of a character with various attributes, such as `name`, `attack`, `defense`, `dexterity`, and more. It also provides functionality for managing weapons and actions, such as switching weapons and taunting.

## Purpose

The primary goal of this project was to help understand the **constructor functions** in JavaScript and how to use them to initialize object properties. Additionally, the project demonstrates methods that modify the object state and perform actions like switching weapons and taunting.

## Class Overview: `Brawlhalla`

### Constructor
The `Brawlhalla` class is initialized with the following parameters:
- `name` (string): The character's name.
- `attack` (number): The character's attack power.
- `defense` (number): The character's defense power.
- `dexterity` (number): The character's dexterity level.
- `popularity` (number): The character's popularity.
- `weapon1` (string): The first weapon available for the character.
- `weapon2` (string): The second weapon available for the character.
- `backStory` (string): A brief backstory of the character.
- `equippedWeapon` (string): The character’s current weapon (default is `'fist'`).

```javascript
class Brawlhalla {
  constructor(name, attack, defense, dexterity, equippedWeapon, weapon1, weapon2, popularity, backStory) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.dexterity = dexterity;
    this.popularity = popularity;
    this.weapon1 = weapon1;
    this.weapon2 = weapon2;
    this.backStory = backStory;
    this.equippedWeapon = 'fist';  // Default weapon is 'fist'
  }
}
