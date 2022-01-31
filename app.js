//same keys and values

/** function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
*/

//Write an ES2015 Version

const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}

//commpute property names
/**
 var favoriteNumber = 42;
 var instructor = {
  firstName: "Colt"
}
instructor[favoriteNumber] = "That is my favorite!"
 */

//write an ES2015 Version

const favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//object methods 
/**
 * var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
 */

//write an ES2015 Version
const instructor1 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

//Write a function which generates an animal object. The function should accepts 3 arguments.

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            console.log(noise)
        }
    }
}