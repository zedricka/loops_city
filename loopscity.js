// Mommy I can counts to 100 in Javascript

//create var called count
var count;

//create for loop that counts from 0 to 100
//console.log the value for count
for (var count = 0; count <=100; count++){
  console.log("I can count to " + count);
}


// Noah Arc

//create var called animalCount
var animalCount;

//create a for loop that loops 5 times
//console.log the number of animals
//console.log should say "there are "x" many animals in Noahs Arc"
for (var animalCount = 0; animalCount <=5; animalCount++){
  console.log(animalCount);
  console.log("there are " + animalCount + " many animals in Noahs Arc");
}


//Hip Hop Array

//create var called partyAnimals that has an array with 5 values
var partyAnimals = ['Mankey', 'Sceptile', 'Lycanroc', 'Pikachu', 'Jomari'];

//create a for loop that loops through the partyAnimals array
//console.log each party animal in a separte unique sentence

for (var imin = 0; imin <= 4; imin++){
  console.log (partyAnimals[imin]);
}


//Merlin's Battle Weapon

//create an array called weaponChest with a Mace, Sorcerer's Stone and Excalibur
var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"]
//create an object called hero with a wizard named Merlin, weapon set to any item from the chest and power of 30
var hero = {
  wizard : "Merlin",
  weapon : weaponChest[2],
  power : 30,
}
//create a function with one parameter
function wow (a){
  if (hero.weapon == "Sorcerer's Stone"){
    console.log (hero.wizard + " shall slay the dragon with the " + hero.weapon);
  }
  else{
    console.log (hero.wizard + " is ready for war with the " + hero.weapon);
  }
}
wow (hero.weapon);
//create a conditional to see if Merlin has the Sorcerer's Stone
//console log wizard "Shall slay the dragon with the" weapon

//If Merlin does not have the Sorcerer's Stone, set .
//Console log Wizard "is ready for war with the weapon"