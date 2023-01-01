let hero; //not declaring a type, its 'any' type

// here declare the type explicity--> no inference because we are not declaring it then and there.

let heroOne: string;
function getHero() {
  return 'krish'; // boolean or number  could also be pased bcz of any type
  // return "krish";
  // return 1;
}
heroOne = getHero(); // the heroOne can only store string type value and nth else.

hero = getHero(); // can store any type of value.
