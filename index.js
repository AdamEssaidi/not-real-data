const dataAr = require('../repo/src/GenAr');
const dataFr = require('../repo/src/GenFr');
const dataEn = require('../repo/src/GenEn');

function logRandomData(data) {
    // Access and use data functions from data.js

    const randomAddress = data.getRandomAddress();
    const randomAnimal = data.getRandomSpecies();
    const randomBookTitle = data.getRandomBookTitle();
    const randomColor = data.getRandomColor();
    const randomFoodItem = data.getRandomFoodItem();
    const randomHolidayDestination = data.getRandomHolidayDestination();
    const randomMovieTitle = data.getRandomMovieTitle();
    const randomPersonName = data.getRandomPersonName();
    const randomProductName = data.getRandomProductName();
    const randomVehicle = data.getRandomVehicle();
  
    // Use the data in your project
    
    console.log('Random Address:', randomAddress);
    console.log('Random Animal:', randomAnimal);
    console.log('Random Book Title:', randomBookTitle);
    console.log('Random Color:', randomColor);
    console.log('Random Food Item:', randomFoodItem);
    console.log('Random Holiday Destination:', randomHolidayDestination);
    console.log('Random Movie Title:', randomMovieTitle);
    console.log('Random Person Name:', randomPersonName);
    console.log('Random Product Name:', randomProductName);
    console.log('Random Vehicle:', randomVehicle);
  }

  console.log('');
console.log('English Data ----------------------------------------------------');
logRandomData(dataEn);

console.log('');
console.log('French Data ----------------------------------------------------');
logRandomData(dataFr);

console.log('');
console.log('Arabic Data ----------------------------------------------------');
logRandomData(dataAr);