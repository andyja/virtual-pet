const Pet = require('../src/pet');
describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});

describe('constructor', () => {
  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });
}); 
describe('constructor', () => {
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');

    expect(pet.age).toEqual(0);
  });
});
describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});
describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });
});
  it('increases fitness to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
describe('feed', () => {
  it('decreases hunger by 3', () => {
    const pet = new Pet('fido');

    pet.hunger = 5;
    pet.feed();
    
    expect(pet.hunger).toEqual(2);
  });
});
it('decreases hunger to a minimum of 0', () => {
  const pet = new Pet('fido');

  pet.hunger = 2;
  pet.feed();

  expect(pet.hunger).toEqual(0);
});
describe('checkUp', () => {

  it('asks to be walked if fitness has triggered fitness alarm', () => {
    const pet = new Pet('Fido');

    pet.fitness = 3;

    pet.checkUp();

    expect(pet.checkUp()).toEqual('Woof, I need a walk, woof');

  });
  it('asks to be fed if hunger has triggered hunger alarm', () => {
    const pet = new Pet('Fido');

    pet.hunger = 5;

    pet.checkUp();

    expect(pet.checkUp()).toEqual('Woof, I am hungry, woof');

  });
  it('asks to be fed and walked if hunger has triggered hunger alarm and fitness has triggered fitness alarm', () => {
    const pet = new Pet('Fido');

    pet.hunger = 5;
    pet.fitness = 3;

    pet.checkUp();

    expect(pet.checkUp()).toEqual('Woof, I am hungry AND I need a walk, woof');

  });
  it('checks if all is ok', () => {
    const pet = new Pet('Fido');

    pet.hunger = 4;
    pet.fitness = 4;

    pet.checkUp();

    expect(pet.checkUp()).toEqual('Woof, I feel great, woof');

  });
})