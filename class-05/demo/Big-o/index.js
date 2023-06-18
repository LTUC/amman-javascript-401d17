// Constant 
const name = 'Hassan'; // O(1)
const age = 29; // O(1)
console.log(age, name) // O(1)

// Big O = O(1) + O(1) + O(1) -> O(1)
//  3 * O(1)

// -------------------
const fName = 'Anas'; // O(1)
for(let i = 0; i < 1000; i ++) { // O(n)
  console.log(fName); // O(1)
}

// Big O = O(1) + O(n) + O(1) -> O(n)
// 2 * O(n)

// ---------------------
const y = 15 * 20 * 1000; // O(1)
for(let i = 0; i < y; i++) console.log(i); // O(n)
// Big O = O(1) + O(n) -> O(n)
// 1 * O(n)

// ----------------------
for x in range (o, n) // O(n)
for y in range (o, n) // O(n)
print(x * y) // O(1)

// Big O = O(n) + O(n) + O(1) -> O(n^2)

// ----------------------
// 4 => 24
// 10 =>  

// ---------
// 20
if(x < 0)
  // O(1)
elseif( x < 10)
  // O(logn)
else
  // O(n!)

