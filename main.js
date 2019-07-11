let counter = 0;
var outputElement = document.getElementById("dynamic-content");

function incrementCounter () {
    counter += 2;
    outputElement.innerHTML += counter;
    
}
incrementCounter();

const lunch = {
    sandwich: "peanut butter and jelly",
    bread: "whole wheat",
    drink: "grape juice",
    fruit: "apple"
}

const food = ["lunch", "peanut butter and jelly", "whole wheat", "grape juice", "apple"];


const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

console.log(`Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!`);


// 1. Use `document.querySelector('.blogPosts')` to create a variable called `blogContainer`

// 2. Use `document.querySelectorAll('.blogArticle')` to create variable called `myArticles`

// 3. console.log each variable. How are they different? Try adding an additional class of "currentBlog" to the elements using `classList.add`. 
// Does it work? Why or why not? If not, what do you need to do to meet the requirement of adding a class?

const blogContainer = document.querySelector('.blogPosts');
const myArticles = document.querySelectorAll('.blogArticle');

console.log(blogContainer);
console.log(myArticles);

blogContainer.classList.add('currentBlog');


for (let i = 0; i < myArticles.length; i++) {
    myArticles[i].classList.add('currentBlog');
}


// Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height, wardrobe.manufacturer, wardrobe.contents, wardrobe.depth, wardrobe.width);

// Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
// Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. 
// Create 5 variables first with the keys as their values. Use those variables to look up the values.

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength, empireStateBuilding.stories);

const address = "address";
const constructionDate = "constructionDate"
const cost = "cost";
const owner = "owner";
const architect = "architect";

console.log(empireStateBuilding[address]);
console.log(empireStateBuilding[constructionDate]);
console.log(empireStateBuilding[cost]);
console.log(empireStateBuilding[owner]);
console.log(empireStateBuilding[architect]);

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
// Lightning Exercise 2: Output only Andy and Zoe in the console.

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.partTime, nashvilleSoftwareSchool.instructors.fullTime);
console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);


// Output the following value to the console.
// Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`);


// #1)  Loop through this array of objects and console.log "_name_'s job title is _title_."

const employees = [
  {
    name: "Bob",
    department: "sales",
    title: "sales manager"
  },
  {
    name: "Tina",
    department: "finance",
    title: "director of finance"
  },
  {
    name: "Randy",
    department: "IT",
    title: "hardware guy"
  },
  {
    name: "Glenda",
    department: "C-suite",
    title: "CEO"
  }
]

for (let i = 0; i < employees.length; i++) {
    console.log(`${employees[i].name}'s job title is ${employees[i].title}`)
}

// Alternative method: 
employees.forEach(function (employee) {
    console.log(`${employee.name}'s job title is ${employee.title}`);
});

// #2) Functions can return a value that we can capture:
// 1. Write a function that takes a string of a dog breed as an argument (like 'border collie')
// 2. Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".
// 3. Execute the function in a way that captures the returned value in a variable.
// 4. Console.log the string "When it comes to pets," plus the returned value of the function.

function favBreed (breed) {
    if (breed) {
        return `my favorite dog breed is ${breed}`;
    } 
    else {
        return "I like cats";
    }
}

const dog = favBreed("poodle");
console.log(`When it comes to pets, ${dog}`);
    
const cat = favBreed();
console.log(`When it comes to pets, ${cat}`);

// #1) Use dot notation to access the value of the key "meaning_of_life" in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);

// Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`
// ===
let meaning = "meaning_of_life";
console.log(hitchhikers_guide["random_facts"]["ultimate_answer"][meaning]);


// 2) ## An object's properties can be accessed by dot notation or bracket notation

let employee = {
  name: "Jeff Winger",
  age: 37,
  department: "legal",
  hire_date: "09/22/2010"
}

// 1. Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'

console.log(`Our company's lawyer is ${employee.name}`);

// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.

console.log(`${employee["name"]} was hired ${employee["hire_date"]}`)

// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.

employee.vacation_days = 20;
employee["vacation_days"] = 20;

// 4. Use the variable to add a new property to `employee`. Set its value to `false`. Should you use dot or bracket notation?

let eom = "employee_of_the_month";
employee[eom] = false;
console.log(employee)

// #3) ## Objects' keys can contain values of any type, even functions.

    // 1. Add an action that the painter can perform.
    // 2. Have her take that action by execucting the method you created.
    // BONUS:
    // Add a method that allows us to add new tools for the painter.

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true,
  changeUniform: function (newUniform) {
      this.uniform = newUniform;
      console.log(this.uniform);
  },
  buyTools: function(newTools) {
    this.tools.push(newTools);
    console.log(this.tools);
  }
  
}

painter.changeUniform("denim overalls");
painter.buyTools("paint");
painter.buyTools("tape");
painter.buyTools("ladder");


// Loop over this array of objects and insert the names of the family members into `<h3>` tags, and append them to the DOM.

let family = [
  {
    name: "Fred Jones",
    age: 49,
    title: "parent"
  },
  {
    name: "Pat Jones",
    age: 50,
    title: "parent"
  },
  {
    name: "Bubba Jones",
    age: 20,
    title: "adult child"
  },
  {
    name: "Kelly Jones",
    age: 12,
    title: "dependent child"
  },
  {
    name: "Bartleby",
    age: 3,
    title: "pet"
  }
]
const familySection = document.querySelector("#family");

function printFamilyMembers (familyObject) {
    return `<h3>${familyObject.name}</h3>`
}

for (let i = 0; i < family.length; i++) {
    familySection.innerHTML += printFamilyMembers(family[i]);
}

// Alternative method:
for (let i = 0; i < family.length; i++) {
    document.querySelector("#family").innerHTML += `<h3>${family[i].name}</h3>`;
}

// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

let fave_demo = []

for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18 && ages[i] <= 49) {
        fave_demo.push(ages[i]);
    }
}
console.log(fave_demo); 

// 2) Loop over the following array and
// * capitalize 'the'
// * insert a comma after 'teacher'
// * output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]
let message = ""  

for (let i = 0; i < yoda_quote.length; i++) {
    if (yoda_quote[i] === "the") {
        yoda_quote[i] = "The"
    } 
    else if (yoda_quote[i] === "teacher") {
        yoda_quote[i] = "teacher,"
    }
    message += yoda_quote[i] + " "
}

console.log(`Yoda says, "${message}"`)
    


function add(num1, num2) {
    return num1 + num2
}

function subtract(numA, numB) {
    return numA - numB
}

function calculate(func, numY, numZ) {
    return func(numY, numZ)
}
let mathMsg1 = calculate(add, 4, 6)
let mathMsg2 = calculate(subtract, 10, 5)

// Create three `<h3>` tags in an HTML page that each contain any text you want. 
// Use javascript to listen for a click event on the header tags and `console.log` their text.

const headings = document.querySelectorAll(".head")



for (let i = 0; i < headings.length; i++) {
  function logText () {
    console.log(headings[i].textContent)
  }
  headings[i].addEventListener("click", logText)
}

import {addNum} from "./add.js"
import {subtractNum} from "./subtract.js"

addNum(6)
subtractNum(6)
