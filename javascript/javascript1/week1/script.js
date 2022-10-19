// Age-ify (A future age calculator)
    let yearOfBirth = 1985;
    let yearFuture = 2025;

    // Used const as formula is fixed.
    const age = yearFuture - yearOfBirth;

    console.log(`You will be ${age} years old in ${yearFuture}`);

// Goodboy-Oldboy (A dog age calculator)

    let dogYearOfBirth = 2010;
    let dogYearFuture = 2022;
    let dogYear = dogYearFuture - dogYearOfBirth;

    // shouldShowResultInDogYears - true - will show dog age in dog years.
    // shouldShowResultInDogYears - false - will show dog age in human years.
 
    let shouldShowResultInDogYears = true;
    let dogAgeInDogYear = dogYear * 7;

    if(shouldShowResultInDogYears === true){    
        console.log(`Your dog will be ${dogAgeInDogYear} dog years old in ${dogYearFuture}`)
    }else{
        console.log (`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
    }


