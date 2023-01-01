//string
let greetings: string = 'Saugat Poudel';

// greetings=5;//this is not allowed. auto suggestion also shows related method.
console.log(greetings);

//number
let userId = 3324;

//because of type inference, userId is inferred as number without even declaring it.

// so this line throws error:
// userId='hitesh'

// OR
let userIdNum: number;
userIdNum = 435;

//boolean

let isLoggedIn: boolean = false;
export {};
