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

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return "changbax";
  }

  return "";
}
