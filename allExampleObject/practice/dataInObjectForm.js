const peopleInformation = [{
  name: "Aarav",
  age: 25,
  "Phone no.": 9876543210,
  Address: "123 MG Road, Mumbai"
},
{
  name: "Ananya",
  age: 35,
  "Phone no.": 8765432109,
  Address: "456 Brigade Road, Bengaluru",
},
{
  name: "Ishaan",
  age: 19,
  "Phone no.": 7654321098,
  Address: "789 Park Street, Kolkata",

},
{
  name: "Meera",
  age: 42,
  "Phone no.": 6543210987,
  Address: "101 Connaught Place, Delhi",

},
{
  name: "Rohan",
  age: 28,
  "Phone no.": 5432109876,
  Address: "202 Marine Drive, Chennai",

},
]

const incrementBy1 = function() {
  let i = -1;
  return function() {
    i++;
    return i;
  }
}

const counter = incrementBy1();

const accessName = function(customer1, customer2) {
  return customer1.age - customer2.age;
}

const nameAndAge = function(element) {
  console.log(element);
  return element.name 
}
const listOfName = peopleInformation.sort(accessName).map(nameAndAge);

console.log("listOfName", listOfName);