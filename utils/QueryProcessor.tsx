export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "changbax";
  }


  if (query.toLowerCase().includes("which of the following numbers is the largest")){
    let str = query.toLowerCase()
    let matches = str.match(/\d+/g);
    if (matches !== null){
      let intArray = matches.map(Number);
      return Math.max(...intArray).toString();
    } else{
      return "Na"
    }
    
  }

   // Case 1: Find numbers that are both squares and cubes
   if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    let str = query.toLowerCase();
    let matches = str.match(/\d+/g);
    if (matches) {  // Ensure matches is not null
      let intArray = matches.map(Number);

      let result = intArray.filter(num => {
        // Check if num is a perfect sixth power
        let root = Math.round(Math.pow(num, 1 / 6));
        return Math.pow(root, 6) === num;
      });

      console.log(result);  // Log the results
      return result.join(', ');  // Return as a string for easy readability
    }
  }

  // Case 2: Sum of two numbers
  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    let str = query.toLowerCase();
    let matches = str.match(/\d+/g);  // Extract all numbers
    if (matches && matches.length === 2) {  // Ensure there are two numbers
      let num1 = Number(matches[0]);
      let num2 = Number(matches[1]);
      let sum = num1 + num2;
      console.log(sum);  // Log the result
      return sum.toString();  // Return the result as a string
    }
  }

  // Case 3: Multiplication of two numbers
  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied by")) {
    let str = query.toLowerCase();
    let matches = str.match(/\d+/g);  // Extract all numbers
    if (matches && matches.length === 2) {  // Ensure there are two numbers
      let num1 = Number(matches[0]);
      let num2 = Number(matches[1]);
      let product = num1 * num2;
      console.log(product);  // Log the result
      return product.toString();  // Return the result as a string
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("minus")) {
    let str = query.toLowerCase();
    let matches = str.match(/\d+/g);  // Extract all numbers
    if (matches && matches.length === 2) {
      let num1 = Number(matches[0]);
      let num2 = Number(matches[1]);
      let difference = num1 - num2;
      console.log(difference);  // Log the result
      return difference.toString();  // Return the result as a string
    }
  }

  if (query.toLowerCase().includes("which of the following numbers are primes")) {
    let str = query.toLowerCase();
    let matches = str.match(/\d+/g);
    if (matches) {
      let intArray = matches.map(Number);

      // Helper function to check if a number is prime
      const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };

      let primes = intArray.filter(isPrime);

      console.log(primes);  // Log the results
      return primes.join(', ');  // Return as a string for easy readability
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("to the power of")) {
    let str = query.toLowerCase();
    let matches = str.match(/\d+/g);  // Extract all numbers
    if (matches && matches.length === 2) {
      let base = Number(matches[0]);
      let exponent = Number(matches[1]);
      let result = Math.pow(base, exponent);
      console.log(result);  // Log the result
      return result.toString();  // Return the result as a string
    }
  }

  // Case 2: Addition of multiple numbers (62 + 64 + 13)
  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    let str = query.toLowerCase();
    let matches = str.match(/\d+/g);  // Extract all numbers
    if (matches) {
      let intArray = matches.map(Number);
      let sum = intArray.reduce((acc, num) => acc + num, 0);  // Sum up all numbers
      console.log(sum);  // Log the result
      return sum.toString();  // Return the result as a string
    }
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return "changbax";
  }

  return "";
}
