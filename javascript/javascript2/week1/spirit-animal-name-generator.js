//Spirit animal name generator
const spiritAnimal = ["The Lion", "The Cheetah", "The Horse", "The Rabbit", "The Elephant", "The Camel", "The Panda", "The Dog", "The Deer", "The Cat"]
console.log(spiritAnimal.length)

const yourSpiritAnimal = [
    {
        animal: "The Cheetah",
        qualities: "Quick thinking, flexible, quick-witted"
    },
    {
        animal: "The Lion",
        qualities: "Natural-born leader, courageous, powerful "
    },
    {
        animal: "The Horse",
        qualities: "Adventurous, independent, friendly "
    },
    {
        animal: "The Rabbit",
        qualities: "Sensitive, creative, clever"
    },
    {
        animal: "The Elephant",
        qualities: "Strong, loyal, proud"
    },
    {
        animal: "The Camel",
        qualities: "Patient, committed, focused"
    },
    {
        animal: "The Panda",
        qualities: "Strong, loyal, proud"
    },
    {
        animal: "The Dog",
        qualities: "Loyal, brave, protective"
    },
    {
        animal: "The Deer",
        qualities: "Graceful, elegant, compassionate"
    },
    {
        animal: "The Cat",
        qualities: "Secretive, observant, curious"
    }

]
//Select the button
const submitBtn = document.querySelector("#submit");

//Add eventListener
submitBtn.addEventListener("click", displaySpiritAnimal);

//Select the New Spirit button
const newSpiritBtn = document.querySelector("#new");
newSpiritBtn.addEventListener("click", displaySpiritAnimal)

function displaySpiritAnimal(event) {
    event.preventDefault(); //To prevent the default behaviour
    const firstName = document.getElementById("name").value;
    if ((firstName === "")||(typeof firstName !=="string")) {
        alert("Error! Please enter the name")
    } else {
        const randomNumber = [Math.floor(Math.random() * yourSpiritAnimal.length)];

        const output = document.querySelector("#display-name");
        output.innerHTML =
            (`${firstName} - ${(yourSpiritAnimal[randomNumber]["animal"])}`);

        const displayQualities = document.querySelector("#display-qualities");
        displayQualities.innerHTML = (`You are ${(yourSpiritAnimal[randomNumber]["qualities"])}`)
    }
};

