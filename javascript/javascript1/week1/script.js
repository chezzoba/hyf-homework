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
 
    const shouldShowResultInDogYears = true;
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

    // Calculation  Peters House volumeInMeters = length * breadth * height;
    const volumeInMetersPetersHouse = (detailsOfHouse[0].length) * (detailsOfHouse[0].breadth) * (detailsOfHouse[0].height);
    
    // Calculation const housePrice = volumeInMetersPetersHouse * 2.5 * 1000 + gardenSizeInM2 * 300;
    const housePricePetersHouse = volumeInMetersPetersHouse * 2.5 * 1000 + (detailsOfHouse[0].gardenSizeInM2) * 300;
    console.log(housePricePetersHouse);
    
    //Condition based on comparision between housePrice and houseCost
    if(housePricePetersHouse<(detailsOfHouse[0].houseCost)){
        console.log(`${(detailsOfHouse[0].name)} is paying too much for the house`)
    }else if (housePricePetersHouse>(detailsOfHouse[0].houseCost)){
        console.log(`${(detailsOfHouse[0].name)} is paying too little for the house`)
    } else {
        console.log(`${(detailsOfHouse[0].name)} is paying exact amount for the house`)
    }

    // Calculation  Julias House volumeInMeters = length * breadth * height;
    //const volumeInMetersJuliasHouse = (detailsOfHouse[1].length) * (detailsOfHouse[1].breadth) * (detailsOfHouse[1].height);
    const volumeInMetersJuliasHouse = (detailsOfHouse[1].length) * (detailsOfHouse[1].breadth) * (detailsOfHouse[1].height);
    
    // Calculation const housePrice = volumeInMetersJuliasHouse * 2.5 * 1000 + gardenSizeInM2 * 300;
    const housePriceJuliasHouse = volumeInMetersJuliasHouse * 2.5 * 1000 + (detailsOfHouse[1].gardenSizeInM2) * 300;
    console.log(housePriceJuliasHouse);
    
    //Condition based on comparision between housePrice and houseCost
    if(volumeInMetersJuliasHouse<(detailsOfHouse[1].houseCost)){
        console.log(`${(detailsOfHouse[1].name)} is paying too much for the house`)
    }else if (volumeInMetersJuliasHouse>(detailsOfHouse[1].houseCost)){
        console.log(`${(detailsOfHouse[1].name)} is paying too little for the house`)
    } else {
        console.log(`${(detailsOfHouse[1].name)} is paying exact amount for the house`)
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
    //Concatenate first word and second word - The concat() method joins two or more strings.
    const startupName = (firstWords[randomFirstNumber]).concat(" ",(secondWords[randomSecondNumber]));
    console.log(`The startup: "${startupName}" contains ${(startupName.length)} characters `)
    
