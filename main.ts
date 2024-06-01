//        🚀 Day 13 Challenge: Start Coding! 🚀

//Question 37: 
//Large Shirts: Default values in make_shirt().
function make_shirt(size: string = "large", message: string = "I love coding in night") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("small"); // Default message, small size
make_shirt("medium", "Coding vs Error"); // Custom message, medium size


//Question 38:
//Cities: Describing cities with a function

function describe_thecity(city: string = "Karachi", country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_thecity();//for print default city and country
describe_thecity("Lahore"); //for print default country
describe_thecity("Tokyo", "Japan"); 


//Question 39: 
//City Names: Formatting city-country pairs.
function city_country(city: string, country: string): string {
    return ` I visited ${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Mumbai", "India"));
