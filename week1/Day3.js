// Arrays
let pets = ['dog', 'cat', 'bird']
pets[1] -
// accessing the pet cat since javascript indexes at 0
pets[0]
pets[2] = 'lizard' 
//  can change the array name like this^

pets[3] = 'monkey'

// What happens if you add a number that doesn't exist in the arrary below
pets[9] = 'rat' 
// This will add empty arrays  until 9 will add rat.

// we can add and remove items to teh end of an arry with push and pop.
// push adds something to the end of an array
// pop removes something from the end of the an arry
pets.push('hamster')
pets.push ('fish', 'ferret')
pets.pop()

// shift and unshift adds and removes items for the beginning of an array.
// unshift addes an item at the beginning of an array
// shift removes an item at the beginning of an array
pets.unshift('frog', 'turtle')
pets.shift()

// Splice ======= R
// emoves specific items.First part is the index you want to start to remove.
//  The second part is the number of elements you want removed.
// So if you want to remove 3,4,5 for example look below. 
let numbers = [1,2,3,4,5,6,7]
numbers.splice(2,3)
// If you want to add an additional item after removing with splice you just add another arguement.
// For example below
numbers.splice(2,3,9)
// This will remove 3,4,5 and replace it with (1,2,9,6,7)


// Slice============
// Copies an array or a portion of an array
// selects the elements starting at the given start argument, and ends at, but does not include, the given end argument
let arr1 = ['tree','bush','rock']
let arr2 = arr1arr2.push('rainbow')

