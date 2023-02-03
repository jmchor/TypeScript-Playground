// Union Types
// "Either-Or-Type" for variables that can belong to more than one type

const mathematician: string | undefined = Math.random() > 0.5 ? undefined : 'Mark Wahlberg';

const physicist: string | number = Math.random() > 0.5 ? 'Marie Curie' : 84;

// Properties on Union Types

physicist.toString(); // is valid since it exists both on string and number

// physicist.toUpperCase(); //is not valid since it only exists on string

//Narrowing
let admiral: number | string;
admiral = 'Grace Hopper';
admiral.toUpperCase();
//admiral.toFixed() won't work anymore cause the variable was narrowed to be of type string