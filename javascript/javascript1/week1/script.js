// Age-ify (A future age calculator)
    const yearOfBirth = 1985;

    //used let yearFuture as it might change
    let yearFuture = 2025;

    // Used const as formula is fixed.
    const age = yearFuture - yearOfBirth;

    console.log(`You will be ${age} years old in ${yearFuture}`);

// Goodboy-Oldboy (A dog age calculator)

    const dogYearOfBirth = 2010;

    // used let dogYearFuture as it might change
    let dogYearFuture = 2022;

    // Used const as formula is fixed.
    const dogYear = dogYearFuture - dogYearOfBirth;

    // shouldShowResultInDogYears - true - will show dog age in dog years.
    // shouldShowResultInDogYears - false - will show dog age in human years.
 
    let shouldShowResultInDogYears = true;
    const dogAgeInDogYear = dogYear * 7;

    if(shouldShowResultInDogYears === true){    
        console.log(`Your dog will be ${dogAgeInDogYear} dog years old in ${dogYearFuture}`)
    }else{
        console.log (`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
    }

// Housey pricey (A house price estimator)
    let detailsOfHouse = [
        {
            name: "Peter", 
            length: 10,
            breadth: 8,
            height: 10,  
            gardenSizeInM2: 100,    
            houseCost: 2500000,
        },
        {
            name: "Julia", 
            length: 11,
            breadth: 5,
            height: 8,  
            gardenSizeInM2: 70,    
            houseCost: 1000000,
        },
    ]
    
    // Using index number to access details of "Peter" or "Julia"
    let indexNumber = 0;
    
    // Calculation volumeInMeters = length * breadth * height;
    const volumeInMeters = (detailsOfHouse[indexNumber].length) * (detailsOfHouse[indexNumber].breadth) * (detailsOfHouse[indexNumber].height);
    
    // Calculation const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    const housePrice = volumeInMeters * 2.5 * 1000 + (detailsOfHouse[indexNumber].gardenSizeInM2) * 300;
    console.log(housePrice);
    
    //Condition based on comparision between housePrice and houseCost
    if(housePrice<(detailsOfHouse[indexNumber].houseCost)){
        console.log(`${(detailsOfHouse[indexNumber].name)} is paying too much for the house`)
    }else if (housePrice>(detailsOfHouse[indexNumber].houseCost)){
        console.log(`${(detailsOfHouse[indexNumber].name)} is paying too little for the house`)
    } else {
        console.log(`${(detailsOfHouse[indexNumber].name)} is paying exact amount for the house`)
    }

// Ez Namey (Startup name generator)

    //Create two arrays called firstWords, secondWords. 

    let firstWords = ["First", "Best", "Think", "Synergy", "Easy", "Rainbow", "Excel", "Sun", "Future", "Euro"];
    let secondWords = ["Corporation", "Enterprise", "Consultancy", "Company", "Venture", "Services", "Solutions", "Talent", "Street", "Path"];

    //To get a random number from Array firstWords
    const randomFirstNumber = [Math.floor(Math.random()*firstWords.length)];
    
    //This will select a random name from Array firstWords
    console.log(firstWords[randomFirstNumber]);

    //To get a random number from Array secondWords
    const randomSecondNumber = [Math.floor(Math.random()*firstWords.length)];
    
    //This will select a random name from Array secondWords
    console.log(secondWords[randomSecondNumber]);

    //Create a variable called startupName that will contain the created startup name.
    //Concatenate first word and second word
    let startupName = console.log(`${(firstWords[randomFirstNumber])} ${(secondWords[randomSecondNumber])}`)


