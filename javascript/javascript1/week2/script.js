console.log("Hello World!");

// Flight booking fullname function

function getFullName(firstName, lastName, useFormalName = false, gender) {
    const fullName = firstName + " " + lastName;

    if (useFormalName === true) {
        if (gender === "female") {
            return `Lady ${fullName}`;
        } else {
            return `Lord ${fullName}`;
        }
    } else {
        return fullName;
    }
}

const fullName1 = "Benjamin";
const fullName2 = "Hughes";
const printName = getFullName(fullName1, fullName2);
console.log(printName);

// Use a variable to get result from return.
const printFormalFullName = getFullName("Benjamin", "Hughes");
console.log(printFormalFullName);

/* Below commented code was used to check code under different circumstances
    getFullName ("Lilly", "Joseph")
    getFullName ("Benjamin", "Hughes")

    // When used usedFormalName argument 
    getFullName ("Lilly", "Joseph", true)
    getFullName ("Benjamin", "Hughes", true)
    getFullName ("Lilly", "Joseph", false)
    getFullName ("Benjamin", "Hughes", false)

    // When added gender as parameter, to address male as "Lord" and female as "Lady"
    getFullName ("Lilly", "Joseph", true, "female")
    getFullName ("Benjamin", "Hughes", true, "male")
    getFullName ("Lilly", "Joseph", false, "female")
    getFullName ("Benjamin", "Hughes", false, "male")

    // When empty string used for useFormalName
    getFullName ("Benjamin", "Hughes","" , "male") 
    getFullName ("Lilly", "Joseph", "", "female")
    */

// Event application

// Get todays Date
const todaysDate = new Date();
/*const todaysDate = new Date(2022, 9, 29) 
used for testing purpose to check the code*/

// Create a variable to specify after how many days the event will be held
const numberOfDaysToEvent = 10;

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const todaysDayIndex = todaysDate.getDay();
//const todaysDayIndex is the index to the array days

const printTodaysDate = todaysDate.toDateString();
console.log(`Today is ${printTodaysDate}`);

const printEventDay = getEventDay(numberOfDaysToEvent);
console.log(
    `Event is going to be held after ${numberOfDaysToEvent} days on ${printEventDay}`
);

function getEventDay(numberOfDaysToEvent) {
    if (todaysDayIndex + numberOfDaysToEvent === 6) {
        if (days.length - todaysDayIndex < numberOfDaysToEvent) {
            const eventDay = days[(todaysDayIndex + numberOfDaysToEvent) % 6];
            return eventDay;
        } else {
            const eventDay = days[todaysDate.getDay() + numberOfDaysToEvent];
            console.log(eventDay);
        }
    } else if (todaysDayIndex + numberOfDaysToEvent > 6) {
        const eventDay = days[((todaysDayIndex + numberOfDaysToEvent) % 6) - 1];
        return eventDay;
    } else {
        const eventDay = days[todaysDate.getDay() + numberOfDaysToEvent];
        return eventDay;
    }
}

// HELP ME CALCULATE EVENTDATE
const eventDate = todaysDate.setDate(todaysDate.getDate() + 50);
console.log(eventDate);

// Weather wear

const temperature = -4;
const goingToRainToday = false;
console.log(goingToRainToday === true);

const whatToWear = getWhatToWear(goingToRainToday, temperature);
console.log(whatToWear);

function getWhatToWear(goingToRainToday, temperature) {
    if ((goingToRainToday === true) && (temperature > 5)) {
        return (`Today's temperature is ${temperature}. Its going to rain today, so remember to carry rain jacket`)

    } else {
        if (temperature <= 0) {
            return (`Today's temperature is ${temperature}. Its freezing cold today, so wear thermals or a layer or 2 of full pants and t.Shirts.You should wear a winter jacket, winter boots, glooves, scarf and winter hat`)
        } else if ((temperature > 0) && (temperature <= 5)) {
            return (`Today's temperature is ${temperature}. Its very cold today, so wear full pants and t.Shirts. You should wear a winter jacket and winter hat`)
        } else if ((temperature > 5) && (temperature <= 10)) {
            return (`Today's temperature is ${temperature}. Its slightly cold today, so wear full pants and t.Shirts. You should wear a light summer wear jacket`)
        } else if ((temperature > 10) && (temperature <= 15)) {
            return (`Today's temperature is ${temperature}. Its slightly hot today, so wear light colored loose clothing. You may wear a light summer wear jacket`)
        } else {
            return (`Today's temperature is ${temperature}.Its very hot today, so wear light colored loose clothing. You may wear shorts`)
        }
    }
}

// Student Manager
const class07Students = [];

function addStudentToClass(studentName) {
    let numberOfStudents = class07Students.length;

    function getNumberOfStudents() {
        return numberOfStudents;
    }

    // Call the getNumberOfStudents to log out the number of students.
    console.log(getNumberOfStudents());

    if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    } else if (((numberOfStudents < 6) && (studentName != "")) || (studentName.includes("Queen"))) {
        class07Students.push(studentName)
    } else {
        if ((studentName === "")) {
            console.log("Please type the name of the student correctly")
        } else {
            console.log("Cannot add more students to class-07")
        }
    }
}

// Adding students to the array class07students
addStudentToClass("Margrethe"); // Student1
addStudentToClass("Shobhana");  // Student2
addStudentToClass("");  // Student - Empty sting not added to array
addStudentToClass("Madhu"); // Student3
addStudentToClass("Claudia");  // Student4
addStudentToClass("Mehmet");  // Student5
addStudentToClass("Alex");  // Student6

addStudentToClass("Peter");
// Cannot add more students to class-07

// Student with same name
addStudentToClass("Shobhana");
//'Student Shobhana is already in the class'

addStudentToClass("Queen Margrethe")
//Added Queen Margrethe to the class, even if number of students in class is already 6

console.log(class07Students);

// Exercise from last class

// Count By Sound
const myFriends = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']

let count = 0;

// Loop through Array
for (let i = 0; i < myFriends.length; i++) {
    //if function inside for loop
    if (myFriends[i].includes("a")) {
        count++;
        console.log(count)
    } else {
        console.log(myFriends[i])
    }
}

console.log(myFriends.includes("a"));

// Exercise - Find Lola

function findFriend() {
    for (let i = 0; i < myFriends.length; i++) {
        //if function inside for loop
        if (myFriends[i].includes('Lola')) {
            console.log("Found Lola")

        }
    }
}

const findLola = findFriend('Lola');

// Function getCircleArea

let radius = 3;
const areaOfCircle = Math.PI * radius ** 2;
// when radius =3, area of circle is 28.27

function getCircleArea(radius) {
    console.log((Math.PI * radius ** 2).toFixed(2));
    return (Math.PI * radius ** 2).toFixed(2);
    //toFixed(2) - To roundup decimal number to 2 places.
}

getCircleArea(3); //28.27
getCircleArea(5); //78.54

// Calculate Celcius to Fahrenheit

let temperatureInCelcius = 30;
/*To convert temperatures in degrees Celsius to Fahrenheit, 
multiply by 1.8 (or 9/5) and add 32.
*/

let celciusToFahreneit = temperatureInCelcius * 1.8 + 32;
console.log(celciusToFahreneit);

function calculateCelciusToFahreneit(temperatureInCelcius) {
    console.log(temperatureInCelcius * 1.8 + 32)
    return temperatureInCelcius * 1.8 + 32;
}

calculateCelciusToFahreneit(30);
calculateCelciusToFahreneit(20);


