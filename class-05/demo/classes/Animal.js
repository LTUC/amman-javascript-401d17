class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  walk() {
    console.log(`${this.name} is walking`)
  }
}

class Dog extends Animal {
  constructor(name, legs, breed) {
    super(name, legs);
    this.type = 'Dog';
    this.breed = breed;
  }

  speak() {
    console.log('Whoof');
  }
}

class Cat extends Animal {
  constructor(name, legs, canJump) {
    super(name, legs);
    this.type = 'Cat';
    this.canJump = canJump;
  }

  jump() {
    if(this.canJump) console.log(`${this.name} can Jump`);
    else console.log(`${this.name} can not Jump`);
  }
}


// const rex = new Animal('Rex', 4);
const rex = new Dog('Rex', 4, 'German')
rex.walk()
rex.speak()
const lucy = new Cat('Lucy', 4, false);
lucy.walk()
lucy.jump()
// const lucy = new Animal('Lucy', 4);

console.log(rex)
console.log(lucy)