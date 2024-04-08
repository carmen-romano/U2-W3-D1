class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  ageCompare(ageToCompare) {
    if (this.age > ageToCompare.age) {
      return this.firstName + " è più vecchio di " + ageToCompare.firstName;
    } else
      return ageToCompare.firstName + " è più vecchio di " + this.firstName;
  }
}

const user1 = new User("Matteo", "Gialli", 32, "Genova");
const user2 = new User("Giacomo", "Gallo", 27, "Napoli");
const user3 = new User("Francesco", "Bianchi", 27, "Perugia");
const user4 = new User("Mario", "Neri", 38, "Firenze");
console.log(user2.ageCompare(user4));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static ownerIncluded(ownerName, petArray) {
    return petArray.some((pet) => pet.ownerName === ownerName);
  }
}

let petNameInput = document.getElementById("petName");
let ownerNameInput = document.getElementById("ownerName");
let speciesInput = document.getElementById("species");
let breedInput = document.getElementById("breed");
let formPet = document.getElementById("formPet");

let dateFormPet = [];
let ownerList = [];
const petForm = formPet.addEventListener("submit", (e) => {
  e.preventDefault();
  let petData = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  );

  dateFormPet.push(petData);

  console.log("Nuovo oggetto Pet:", petData);

  let isOwnerIncluded = Pet.ownerIncluded(petData.ownerName, dateFormPet);

  console.log("Il proprietario esiste già nella lista:", isOwnerIncluded);

  petNameInput.value = "";
  ownerNameInput.value = "";
  speciesInput.value = "";
  breedInput.value = "";
});
