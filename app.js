console.log('hello');
// **************************//
// Array *************//
// **************************//

// An array is a special variable, which can hold more than one value:
// Also can select on of the Index of the Array
// For example: list[1]
//Can also add, remove and change existing Arrays. Also sort the Array.


let food = ['bacon','lettuce','cheese'];

// Video mostly showed inside the devTools.
food[0] = 'halal bacon';

food.indexOf('bacon');

food.push('mayo');
// It removes the last one but you are able to choose which one to remove by example: food.pop('lettuce');
food.pop();
// pushed it back in
food.push('mayo');
// Put its in the front
food.unshift('mayo');
// removes it from the front
food.shift('mayo');
// adds sesame and puts it in the front
food.unshift('sesame');



// ********************** //
// Introduction to Loops  
// ********************** //
// As programmers, we always strive to not repeat ourselves. This means if we can write a line of code and run it many times instead of writing it over and over again – we're going to do it! Loops are the first of many ways we can achieve this.


// *************** What is Loop?  *************** //
// Repeated Actions
// Block of code
// Conditional

// *************** Types  *************** //
// While loop - is true condtions
//  While(hungry){
//    keep eating
// }

// For loop - A # of items
// for(each pizza){
// check if it has chicken
//}

let index = 0;
const max = 10;
while(index < max){
  console.log('in while loop:', index);
  index++;
}
console.log('in After while loop:', index);


for(let i = 0; i < max; i++){
  console.log('In for loop', i);
}

let hand = ['K', 'Q', 'A', 'J', '1','2','3'];

for(let i = 0; i < hand.length; i++){
  console.log('for loop', hand[i]);
  if(hand[i] === '3'){
    console.log('Match');
  }
}

// For In : it behaves the same way
for(i in hand){
  console.log('for in loop', hand[i]);
  if(hand[ i ] === '3'){
    console.log('Match');
  }
}

for(card of hand){
  console.log('for of loop', card);
  if(card === '3'){
    console.log('Match');
  }
}