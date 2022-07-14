
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    }

    Pet.prototype.growUp = function () {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };
    Pet.prototype.walk = function() {
        if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
          this.fitness += 4;
        } else {
          this.fitness = MAXIMUM_FITNESS;
        }
      }
      Pet.prototype.feed = function() {
        if ((this.hunger - 3) >= MINIMUM_HUNGER) {
            this.hunger -= 3;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
      }
      Pet.prototype.checkUp = function () {
        const fitnessAlarm = (this.fitness <= 3)
        const hungerAlarm = (this.hunger >= 5)

        if (fitnessAlarm && hungerAlarm) {
            return 'Woof, I am hungry AND I need a walk, woof'
        }

        if (fitnessAlarm) {
            return 'Woof, I need a walk, woof'
        }

        if (hungerAlarm) {
            return 'Woof, I am hungry, woof'
        }

        if (!fitnessAlarm && !hungerAlarm) {
            return 'Woof, I feel great, woof'
        }
      }

  
module.exports = Pet;