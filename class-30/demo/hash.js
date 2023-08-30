'use strict';

const LinkedList = require("./LinkedList");

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  // Waleed
  hash(key) {
    // console.log(key.split(''))
    return key.split('').reduce((p, n) => {
      // console.log(p, n);
      return p + n.charCodeAt(0);
    },0) * 599 % this.size;
    // console.log(hashed)
  }

  set(key, value) {
    const hashedKey = this.hash(key);
console.log(this.map[hashedKey])
    if(!this.map[hashedKey]) this.map[hashedKey] = new LinkedList();
    const entry = {[key] : value}
    this.map[hashedKey].add(entry);
    // console.log(entry)
  }
}

const makeHash = new Hashmap(19);
// console.log(makeHash.hash('Waleed'))
makeHash.set('Waleed', 'Instructor')
makeHash.set('Aseel', 'TA')
makeHash.set('Majed', 'TA')
makeHash.set('Mohammed', 'TA')
makeHash.set('Mohammed', 'Student')
makeHash.set('Mohammed', 'Student')
makeHash.set('Mohammed', 'Student')
makeHash.set('Ayah', 'Student')
makeHash.set('Hasan', 'Student')
makeHash.set('Alaa', 'Student')
makeHash.set('Hamza', 'Student')
makeHash.set('Ihab', 'Student')
makeHash.set('Laith', 'Student')
makeHash.set('Rama', 'Student')
makeHash.set('Sham', 'Student')
makeHash.set('Abdullah', 'Student')
makeHash.set('Basha', 'Student')
makeHash.set('Saleh', 'Student')
makeHash.set('Anas', 'Student')
makeHash.set('Farah', 'Student')

// console.log(makeHash.map)

makeHash.map.forEach((data, i) => {
  console.log(i, data && data.values())
});