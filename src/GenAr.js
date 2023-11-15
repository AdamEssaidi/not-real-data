// Import data arrays from respective files
const addressData = require('../lib/Ar/adress');
const animalData = require('../lib/Ar/animal');
const bookData = require('../lib/Ar/book');
const colorData = require('../lib/Ar/color');
const foodData = require('../lib/Ar/food');
const holidayData = require('../lib/Ar/holiday');
const movieData = require('../lib/Ar/movie');
const personData = require('../lib/Ar/person');
const productData = require('../lib/Ar/product');
const vehicleData = require('../lib/Ar/vehicle');

// Address data functions
function getRandomAddress() {
  const moroccanAddresses = addressData.addresses.moroccanAddresses;
  const usAddresses = addressData.addresses.usAddresses;
  const frenchAddresses = addressData.addresses.frenchAddresses;

  // Choose a random country
  const countries = ['moroccanAddresses', 'usAddresses', 'frenchAddresses'];
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  // Select random city, region, and postal code based on the chosen country
  let cities, regions, postalCodes;

  switch (randomCountry) {
    case 'moroccanAddresses':
      cities = moroccanAddresses.cities;
      regions = moroccanAddresses.regions;
      postalCodes = moroccanAddresses.postalCodes;
      break;

    case 'usAddresses':
      cities = usAddresses.cities;
      regions = usAddresses.states; // Using states as regions for US
      postalCodes = usAddresses.zipCodes;
      break;

    case 'frenchAddresses':
      cities = frenchAddresses.cities;
      regions = frenchAddresses.regions;
      postalCodes = frenchAddresses.postalCodes;
      break;

    default:
      // Handle default case or error
      console.error('Invalid country');
      return null;
  }

  // Choose a random index for each array
  const randomCityIndex = Math.floor(Math.random() * cities.length);
  const randomRegionIndex = Math.floor(Math.random() * regions.length);
  const randomPostalCodeIndex = Math.floor(Math.random() * postalCodes.length);

  // Construct the random address
  const randomAddress =
    cities[randomCityIndex] +
    ', ' +
    regions[randomRegionIndex] +
    ', ' +
    postalCodes[randomPostalCodeIndex];

  return randomAddress;
}

// Animal data functions
function getRandomSpecies() {
  const species = animalData.species;
  const randomIndex = Math.floor(Math.random() * species.length);
  return species[randomIndex];
}

// Book data functions
function getRandomBookTitle() {
  const bookTitles = bookData.books.bookTitles;
  const randomIndex = Math.floor(Math.random() * bookTitles.length);
  return bookTitles[randomIndex];
}

// Food data functions
function getRandomFoodItem() {
  const foodCategories = foodData.food; // Access the nested 'food' object
  const foodItems = foodCategories.foodNames;
  const randomIndex = Math.floor(Math.random() * foodItems.length);
  return foodItems[randomIndex];
}

// Holiday data functions
function getRandomHolidayDestination() {
  const holidays = holidayData.holidays; // Access the nested 'holidays' object
  const destinations = holidays.holidayNames;
  const randomIndex = Math.floor(Math.random() * destinations.length);
  return destinations[randomIndex];
}

// Movie data functions
function getRandomMovieTitle() {
  const movieTitles = movieData.movies.movieTitles;
  const randomIndex = Math.floor(Math.random() * movieTitles.length);
  return movieTitles[randomIndex];
}

// Person data functions
function getRandomPersonName() {
  const names = personData.firstname; // Assuming the first and last names have the same length
  const randomIndex = Math.floor(Math.random() * names.length);
  const firstName = personData.firstname[randomIndex];
  const lastName = personData.lastname[randomIndex];
  return `${firstName} ${lastName}`;
}

// Product data functions
function getRandomProductName() {
  const productNames = productData.produits.noms;
  const randomIndex = Math.floor(Math.random() * productNames.length);
  return productNames[randomIndex];
}

// Color data function
function getRandomColor() {
  const colors = colorData.colors;
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Vehicle data function
function getRandomVehicle() {
  const vehicles = vehicleData.véhicules;
  const randomIndex = Math.floor(Math.random() * vehicles.length);
  return vehicles[randomIndex];
}


module.exports = {
  getRandomAddress,
  getRandomSpecies,
  getRandomBookTitle,
  getRandomFoodItem,
  getRandomHolidayDestination,
  getRandomMovieTitle,
  getRandomPersonName,
  getRandomProductName,
  getRandomColor,
  getRandomVehicle,
};
