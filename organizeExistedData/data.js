export const allPets = {
  max: {
    type: "dog",
    petName: "max",
    years: 4,
    vaccinated: "fully",
    favouriteActivity: ["fetch"],
  },

  kiwi: {
    type: "parrot",
    petName: "kiwi",
    years: 7,
    vaccinated: "fully",
    favouriteActivity: ["mimics her Voice"],
  },

  leo: {
    type: "cat",
    petName: "leo",
    years: 2,
    vaccinated: "half",
    favouriteActivity: ["mimics her Voice"],
  },

  bella: {
    type: "cat",
    petName: "bella",
    years: 5,
    vaccinated: "fully",
    favouriteActivity: ["lounging in sun"],
  },

  oreo: {
    type: "cat",
    petName: "oreo",
    years: 6,
    vaccinated: "fully",
    favouriteActivity: ["lounging in sun"],
  },

  snowy: {
    type: "rabbit",
    petName: "snowy",
    years: 3,
    vaccinated: "half",
    favouriteActivity: ["hopping around backyard", "nibbling on carrots"],
  },
};

export const rahul = {
  name: "rahul",
  profession: "software engineer",
  age: 35,
  "emplyoment status": "employed",
  city: "pune",
  hobbies: [
    {
      category: "playing chess",
      specifics: "gardening",
    },
    {
      category: "reading",
      specifics: "murder mystery",
    },
    {
      category: "cooking",
      specifics: "try Italian recepies",
    },
  ],

  hasCar: true,
  studied: "computer science",
  pets: [allPets.max, allPets.kiwi],
};

export const ananya = {
  name: "ananya",
  profession: "graphic designer",
  age: 30,
  "emplyoment status": "employed",
  city: "Bangalore",
  hobbies: [
    {
      category: "cooking",
      specifics: "try Italian recepies",
    },
  ],

  hasCar: false,
  studied: "computer science",

  pets: [allPets.leo],
};

export const ramesh = {
  name: "ramesh",
  profession: "bussiness Man",
  age: 45,
  "emplyoment status": "unemployed",
  city: "jaipur",
  hobbies: [
    {
      category: "gardening",
      specifics: "tending rose garden",
    },
    {
      category: "reading",
      specifics: "historical fiction",
    },
  ],

  hasCar: true,
  studied: "management",

  pets: [allPets.bella, allPets.oreo],
};

export const kavya = {
  name: "kavya",
  profession: "dancer",
  age: 50,
  "emplyoment status": "unemployed",
  city: "chennai",
  hasCar: false,
  studied: "arts",
  hobbies: [
    {
      category: "binge-watching",
      specifics: "sci-fi",
    },

    {
      category: "reading",
      specifics: "fantasy novels",
    },
  ],

  pets: [allPets.snowy],
};

export const people = [rahul, ananya, ramesh, kavya];
const newPeople = [
  {
    ...ananya,
    pets: [{ ...allPets.leo, favouriteActivity: ["jumping"] }],
  },
];

// const
// console.log(newPeople);
