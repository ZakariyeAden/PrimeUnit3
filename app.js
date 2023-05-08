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