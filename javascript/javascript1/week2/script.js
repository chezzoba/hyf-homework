console.log ("Hello World!");

// Flight booking fullname function

    function getFullName (firstName, lastName, useFormalName = false, gender) {
        const fullName = firstName +" "+ lastName;  
    
        if(useFormalName === true){
            if (gender === "female"){
                return (`Lady ${fullName}`);        
            } else {
                return  (`Lord ${fullName}`);
            }        
        }else{
            return fullName;        
        }    
    }

    const fullName1 = "Benjamin";
    const fullName2 = "Hughes";
    const printName = 
    getFullName (fullName1, fullName2)
    console.log (printName);

    // Use a variable to get result from return.
    const printFormalFullName = 
    getFullName ("Benjamin", "Hughes")
    console.log (printFormalFullName);

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

    