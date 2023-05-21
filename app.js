console.log('hello');
// ***************************************//
//************* Array ********************//
// ***************************************//

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

// ******** Practical TeamWork EFFECTIVE QUESTIONS AND RESEARCH ******** //
// Effective questions and efficient online research are critical professional skills. In this video, we introduce techniques in online search, storing resources, and sharing valuable links.
// 1.) Search what you are looking for Example: Google alot, use multiple keywords, use quotes, use or, use site operator
// 2.) Store the data and remember.Also can use it in the future
// 3.) Share your knowledge so many other people can benefit from it.

 // **** Advice
 // Frame your questions 3 different ways

 // 10 tab rule open the top ten results. Scan multiple resources for value before doing deep-dive into a single link. 
//  experienced developers immediately acknowledge what they don’t know and set out to find the answers, while inexperienced developers often times don’t have the knowledge nor the humility to begin looking for answers.

 // Ask good questions. Advanced search option

 // Bookmark any useful links. Can you use it in the future.Instead of having bunch of tabs open 

 // Share anything that you find 

 // Post any questions or thoughts

 // The prime is community Resource