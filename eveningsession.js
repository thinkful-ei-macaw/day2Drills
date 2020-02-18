/* eslint-disable indent*/
'use strict';


/*
1. Object initializers and methods
Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to
 300 and water which should be set to 210.
Use console.log to print the flour and water properties.
Add an empty method to the loaf object called hydration.
Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
Call the hydration method and use console.log to print the result.


const loaf = {
  flour: 300,
  water: 210, 
  hydration: function(){
    return ((this.water / this.flour)*100);
    }
};

console.log(loaf.hydration());

*/

/*
2. Iterating over an object's properties
Create an object with five properties: foo, bar, fum, quux, and spam. Give each 
property a unique value of your choosing.
Loop over the object using for ... in
Use console.log to show each property name and its associated value.





const blob = {
  foo: 'drink',
  bar: 'some',
  fum: 'water',
  quux: 24,
  spam: 90,

};

for (let key in blob) {
  console.log(`${key} = ${blob[key]}`);
}
*/


/*
3. Arrays in objects
Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 
'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
Use console.log to show the name of a hobbit's fourth meal of the day.
Don't forget that humans and hobbits count from 1, but computers count from 0.



let obj = {
  meals: ["breakfast", "second breakfast", 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper',]
}
console.log((obj.meals[4]))
*/




/*
4. Arrays of objects
Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own 
inventions.
Store these objects in an array.
Iterate over the array and use console.log to show each person's job title and name.



function friend(name, jobTitle, boss){
  this.name = name;
  this.jobTitle = jobTitle;
  this.boss = boss;
}

const fren1 = new friend('Mouse', 'Crumb-eater', 'Steve');
const fren2 = new friend('Steve', 'Unwoke-whitey', 'Dracula');
const fren3 = new friend('Dracula', 'Vampire');
/*
const obby1 = {
  name: 'Mouse',
  jobTitle: 'Crumb eater',
  boss: 'Steve'
};

const obby2 = {
  name: 'Steve',
  jobTitle: 'Unwoke whitey',
  boss: 'Dracula'
};

const obby3 = {
  name: 'Dracula',
  jobTitle: 'Vampire'
};
const array = [obby1, obby2, obby3];



const newArr = [fren1, fren2, fren3];

newArr.forEach(item =>
   console.log( `${item.name} : ${item.jobTitle}`))
*/

/*
5. Properties that aren't there
Expand on the previous example by adding a boss property to everyone except the owner of the company.
Change the iteration to print out messages in this format: "${title} ${name} reports to ${boss}.". 
For example: Junior Engineer Bob reports to Fred..
What gets printed out for the owner?
Adjust the message so that people with no boss display "${title} ${name} doesn't report to anybody."
 - for example, Founder John doesn't report to anybody.





newArr.forEach(item =>{

  if(item.boss === undefined){
    console.log(`${item.jobTitle} ${item.name} doesn't report to anybody.`);
  }
  else{
    console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}`);
  }
});
*/



/*
6. Cracking the code
Redo your Cracking the Code problem from String Drills but this time use an object as your cipher.
 This means, instead of doing some kind of condition check like if (char === 'a'), you should use an
  object's key-value pair structure as the code translator.

Additionally, create a decodeWords function that utilizes your decode function to accept
 a single string of words, and then return the fully decoded message as a string.
*/
 

function decode(word) {
 let char = word[0];
 const cipher = {
  a: 2, 
  b: 3, 
  c: 4,
  d: 5
};

  else {
      return(' ');
  }
}



function decodeWords(encoded){

  encoded
  let message = [];

  message.push(decode(sentArr[i]));

}


let sent = 'craft block argon meter bells brown croon droop';
console.log(decodeWords(sent));



 // # 7 Factory Function with LOTR


 function createCharacter(Name, Nickname, Race, Origin, Attack, Defense){
  
  this.Name = Name;
  this.Nickname = Nickname;
  this.Race = Race;
  this.Origin = Origin;
  this.Attack = Attack;
  this.Defense = Defense;
  this.describe = function(){
    return `"${Name} is a ${Race} from ${Origin}."`;
    };
  //this.evaluateFight = function(character){
  //  "Your opponent takes {x} damage and you receive {y} damage"
  //  };

 }

 const gandalf = new createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
 const bilbo = new createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
 const frodo = new createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
 const aragorn = new createCharacter('Aragorn', 'son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
 const legolas = new createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);  

 const playerArray = [gandalf, bilbo, frodo, aragorn, legolas];

 const arwen = new createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 2, 9);


 const hobbits = playerArray.filter((item) => {return item.Race === 'Hobbit'});
 const highATK = playerArray.filter((item) => {return item.Attack > 5});
 console.log(highATK[0].Name);
 const hobNames = hobbits.map((item) => console.log(item.Name));