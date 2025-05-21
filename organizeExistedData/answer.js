import {
  employedPeople,
  howManyhasCar,
  howManyPetsFullyVacinated,
  nameAndTypeOfAnimal,
  cities,
  hobbies,
  petsOfUnemployedPeople,
  averageAge,
} from "./allFunctions.js";

import { people, rahul, ananya, ramesh, kavya, allPets } from "./data.js";

// console.log([rahul, { ...ananya, hasCar: true }, ramesh, kavya]);
export const tests = [
  {
    problemStatement: "1. How many People Employed ?",
    func: employedPeople,
    testCase: [
      {
        case1: people,
        expectedOutput: 2,
      },
      {
        case1: [
          rahul,
          { ...ananya, "emplyoment status": "unemployed" },
          ramesh,
          kavya,
        ],

        expectedOutput: 1,
      },
    ],
  },
  {
    problemStatement: "2. How many People have Car ?",
    func: howManyhasCar,
    testCase: [
      {
        case1: people,
        expectedOutput: 2,
      },
      {
        case1: [
          rahul,
          { ...ananya, hasCar: true },
          { ...ramesh, hasCar: false },
          kavya,
        ],
        expectedOutput: 2,
      },
    ],
  },
  {
    problemStatement: "3. How many pets are fully vaccinated ?",
    func: howManyPetsFullyVacinated,
    testCase: [
      {
        case1: people,
        expectedOutput: 4,
      },
      {
        case1: [
          rahul,
          { ...ananya, pets: [{ ...allPets.leo, vaccinated: "fully" }] },
          ramesh,
          kavya,
        ],
        expectedOutput: 5,
      },
    ],
  },
  {
    problemStatement: "4. How many pets are fully vaccinated ?",
    func: nameAndTypeOfAnimal,
    testCase: [
      {
        case1: people,
        expectedOutput: [
          { type: "dog", petName: "max" },
          { type: "parrot", petName: "kiwi" },
          { type: "cat", petName: "leo" },
          { type: "cat", petName: "bella" },
          { type: "cat", petName: "oreo" },
          { type: "rabbit", petName: "snowy" },
        ],
      },
    ],
  },
  {
    problemStatement: "5. Give invidual name and cities?",
    func: cities,
    testCase: [
      {
        case1: people,
        expectedOutput: [
          { name: "rahul", city: "pune" },
          { name: "ananya", city: "Bangalore" },
          { name: "ramesh", city: "jaipur" },
          { name: "kavya", city: "chennai" },
        ],
      },
      {
        case1: [
          rahul,
          { ...ananya, city: "pune" },
          ramesh,
          { ...kavya, city: "hyderabad" },
        ],
        expectedOutput: [
          { name: "rahul", city: "pune" },
          { name: "ananya", city: "pune" },
          { name: "ramesh", city: "jaipur" },
          { name: "kavya", city: "chennai" },
        ],
      },
    ],
  },
  {
    problemStatement: "people hobbies of category and specifics",
    func: hobbies,
    testCase: [
      {
        case1: people,
        expectedOutput: [
          8,
          [
            { category: "playing chess", specifics: "gardening" },
            { category: "reading", specifics: "murder mystery" },
            { category: "cooking", specifics: "try Italian recepies" },
            { category: "cooking", specifics: "try Italian recepies" },
            { category: "gardening", specifics: "tending rose garden" },
            { category: "reading", specifics: "historical fiction" },
            { category: "binge-watching", specifics: "sci-fi" },
            { category: "reading", specifics: "fantasy novels" },
          ],
        ],
      },
    ],
  },
  {
    problemStatement: "7. Pets of unemployed people pets...?",
    func: petsOfUnemployedPeople,
    testCase: [
      {
        case1: people,
        expectedOutput: 3,
      },
      {
        case1: [
          { ...rahul, "emplyoment status": "unemployed" },
          ananya,
          ramesh,
          kavya,
        ],
        expectedOutput: 5,
      },
    ],
  },
  {
    problemStatement: "8. Average sum of peoples...?",
    func: averageAge,
    testCase: [
      {
        case1: people,
        expectedOutput: 40,
      },
      {
        case1: [{ ...rahul, age: 50 }, { ...ananya, age: 55 }, ramesh, kavya],
        expectedOutput: 50,
      },
    ],
  },
  {
    problemStatement: "8. Average sum of peoples...?",
    func: averageAge,
    testCase: [
      {
        case1: people,
        expectedOutput: 40,
      },
      {
        case1: [{ ...rahul, age: 50 }, { ...ananya, age: 55 }, ramesh, kavya],
        expectedOutput: 50,
      },
    ],
  },
];
