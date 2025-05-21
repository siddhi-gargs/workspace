//Ques1. How many individuals are currently employed?

export const employedPeople = function (people) {
  // console.log("--".repeat(45));

  return people.filter(
    ({ "emplyoment status": emplyoment }) => emplyoment === "employed"
  ).length;
};

// display("1. Currently employed people: ", employedPeople(people));

//Ques2. How many people own a car?

export const howManyhasCar = function (people) {
  return people.filter(({ hasCar }) => hasCar).length;
};

// display("2. How many people has car: ", howManyhasCar(people));

export const extractCity = function (people, specificCity) {
  return people.filter(({ city }) => city === specificCity);
};

// display(extractCity(people, "chennai"));

const noOfPetFullyVaccinated = function (accumulatedCount, person) {
  const vaccinatedAnimal = person.pets.filter(
    ({ vaccinated }) => vaccinated === "fully"
  ).length;

  return accumulatedCount + vaccinatedAnimal;
};

export const howManyPetsFullyVacinated = function (people) {
  return people.reduce(noOfPetFullyVaccinated, 0);
};

// display("3. Animals fully Vaccinated: ", howManyPetsFullyVacinated(people));

export const nameAndTypeOfAnimal = function (people) {
  return people
    .map(({ pets }) => pets.map(({ type, petName }) => ({ type, petName })))
    .flat();
};

// console.log("4. name And type", nameAndTypeOfAnimal(people));

export const cities = function (people) {
  return people.map(({ name, city }) => ({ name, city }));
};

// display("5. Individuals cites", cities(people));

export const hobbies = function (people) {
  const hobby = people
    .map(({ hobbies }) =>
      hobbies.map(({ category, specifics }) => ({
        category,
        specifics,
      }))
    )
    .flat();
  return [hobby.length, hobby];
};

// display("6. Hobbies", hobbies(people));

const noOfpetsEach = function (accuPets, { pets }) {
  return accuPets + pets.length;
};

export const petsOfUnemployedPeople = function (people) {
  const unemployed = people.filter(
    ({ "emplyoment status": employ }) => employ === "unemployed"
  );

  return unemployed.reduce(noOfpetsEach, 0);
};

// display("7. Pets belong to unemployed", petsOfUnemployedPeople(people));

// Ques 8 What is the average age of the individuals mentioned in the passage?

const sumOfAllages = function (accuSum, number) {
  return accuSum + number;
};

export const averageAge = function (people) {
  const individualAges = people.map(({ age }) => age);
  return individualAges.reduce(sumOfAllages, 0) / individualAges.length;
};

// display("8. Average age of people", averageAge(people));

// Ques9 How many individuals have studied computer science, and how many of them have pets?

const calculateHaveCompSci = function (previousCount, person) {
  const doesHaveBoth =
    person.studied === "computer science" && person.pets.length > 0;
  return doesHaveBoth ? previousCount + 1 : previousCount;
};

export const studiedCsciAndHavePets = function (people) {
  return people.reduce(calculateHaveCompSci, 0);
};

// display("9. Studied computer science", studiedCsciAndHavePets(people));

// Ques10. How many individuals own more than one pet?

const moreThan1Pet = function (people) {
  return people.reduce((count, person) => {
    return person.pets.length > 1 ? count + 1 : count;
  }, 0);
};

// display("10. how many have more than one pet", moreThan1Pet(people));

// Ques11. Which pets are associated with specific favorite activities?

const individualPetDetail = function (person) {
  return person.pets.map(({ petName, "loves doing": likes }) => [
    petName,
    likes,
  ]);
};

const petsSpecificActivity = function (people) {
  return people.map(individualPetDetail);
};

// display("11. pets with specific property", petsSpecificActivity(people));

// Ques12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const petInSpecifiedPlace = ({ pets }) => pets.map(({ type }) => ({ type }));

const petFromChennaiOrBengalore = function (people) {
  const cities = ["Bangalore", "chennai"];
  const petInChennaiOrBangalore = people.filter(({ city }) =>
    cities.includes(city)
  );
  return petInChennaiOrBangalore.map(petInSpecifiedPlace).flat();
};

// console.log(
//   "12 animal belong to chennai or bengalore",
//   petFromChennaiOrBengalore(people)
// );

//Ques 13. How many vaccinated pets belong to people who do not own a car?

const countVaccinated = function (count, person) {
  const noOfvacinatedPet = person.pets.filter(
    (pet) => pet.vaccinated.length > 0
  ).length;
  return noOfvacinatedPet + count;
};

const vaccinatedPetnotOwncar = function (people) {
  const notOwnCar = people.filter(({ hasCar }) => !hasCar);
  return notOwnCar.reduce(countVaccinated, 0);
};

// display("13 no Of Vaccinated pet not own car", vaccinatedPetnotOwncar(people));

// Ques 14. What is the most common type of pet among the group?

const mostOccuring = function (prevObj, currObj) {
  return prevObj[1] > currObj[1] ? prevObj : currObj;
};

const countAnimals = function (init, pet) {
  const count = init[pet] || 0;
  init[pet] = count + 1;
  return init;
};

const commonType = function (people) {
  const allAnimals = people.flatMap(({ pets }) => pets.map(({ type }) => type));
  const value = allAnimals.reduce(countAnimals, {});
  return Object.entries(value).reduce(mostOccuring, ["", -Infinity]);
};

// console.log("14. most common type animal", commonType(people));

// Ques 15. How many individuals have more than two hobbies?

const increIfMoreThan2Hobby = function (count, person) {
  return person.hobbies.length > 2 ? count + 1 : count;
};

const haveMoreThan2Hobbies = function (people) {
  return people.reduce(increIfMoreThan2Hobby, 0);
};

// display("15. People have more than 2 hobbies", haveMoreThan2Hobbies(people));

// Ques 16. How many individuals share at least one hobby with Ramesh?

// const peopleShareHobbyWithRamesh = function (people) {
//   const rameshHobbies = people
//     .filter(({ name }) => name === "ramesh")
//     .map(({ name, hobbies }) => ({ name, hobbies }));
//   const {}
// };

// display(
//   "individual share activities with ramesh",
//   peopleShareHobbyWithRamesh(people)
// );

// Ques 17. Which pet is the youngest, and what is its name?

const youngestPet = function (refAnimal, currentAnimal) {
  return refAnimal.years < currentAnimal.years ? refAnimal : currentAnimal;
};

const findYoungestPet = function (people) {
  const pets = people
    .map(({ pets }) =>
      pets.map(({ type, petName, years }) => ({ type, petName, years }))
    )
    .flat();
  return pets.reduce(youngestPet);
};

// display("17. YoungestPet ", findYoungestPet(people));

// Ques 18 What types of books are mentioned as interests, and who reads them?

const interestedInreading = function (people) {
  const likereading = people
    .map(({ hobbies, name }) =>
      hobbies
        .filter(({ category }) => category === "reading")
        .map(({ specifics }) => ({ name, category: "reading", specifics }))
    )
    .flat();
  return likereading;
};

// console.log("18. interestedInreading", interestedInreading(people));

// Ques 19. 9. How many individuals live in cities starting with the letter "B"?

const increIfStayInCityStartWithB = function (cityStartWith) {
  return function (count, { city }) {
    return city[0] === cityStartWith ? count + 1 : count;
  };
};

const stayInCityStartB = function (people, cityWith) {
  return people.reduce(increIfStayInCityStartWithB(cityWith), 0);
};

// display("19. People live in City Start with B", stayInCityStartB(people, "B"));

// Ques 20. Which individuals do not own any pets?

const isSomeOneHasNoPet = function (people) {
  const personWhichHasNoPet = people
    .filter(({ pets }) => pets.length === 0)
    .map(({ name }) => ({ name }));

  return personWhichHasNoPet.length
    ? personWhichHasNoPet
    : "EveryOne has atleast one";
};

// display("20. IsSomeoneHasNoPet :", isSomeOneHasNoPet(people));
