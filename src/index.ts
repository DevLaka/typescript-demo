/***** Basic Types *****/
let noOfVotes: number = 20000;
let nickname: string = "Siri";
let isElected: boolean = true;
let party: any = "GNP"; // 'party = 2' is valid

/***** Arrays *****/
let noOfVotesPerState: number[] = [2000, 1000, 17000];
let currentParty: any[] = ["GNP", 0, "SLPGA", false];

/***** Tuple *****/
let resultOfCandidate: [string, number, boolean] = ["Mahi", 500000, true];

/***** Tuple Array *****/
let employee: [number, string][] = [
  [1, "Mahi"],
  [2, "Saji"],
];

/***** Union *****/
let id: string | number = 2;
id = "A123";
id = 7;

/***** Enum *****/
enum Direction {
  UP, // UP = 0 implicitly
  DOWN, // DOWN = 1 implicitly
  LEFT,
  RIGHT,
}
console.log(Direction.UP); //output: 0
console.log(Direction.LEFT); //output: 2

enum Direction1 {
  UP = 1,
  DOWN, // DOWN = 2
  LEFT,
  RIGHT,
}
console.log(Direction1.DOWN); //output: 2

enum Candidates {
  MAHI = "Mahi",
  SAJI = "Saji",
  LAPE = "Lape",
}

/***** Objects *****/
type Candidate = {
  //using interfaces is a better option
  name: string;
  noOfVotes: number;
};
const candidate: Candidate = {
  name: "Siri",
  noOfVotes: 1000,
};

/***** Type Assertion *****/
let pid: any = "P123";
// Method 1
let productId = <number>pid;
// Method 2
let productId1 = pid as number;

// productId = "P222" // output: Error
productId = 11111;

/***** Functions *****/
function addNum(x: number, y: number): number {
  return x + y;
}

function covertToString(x: number): string {
  switch (x) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    default:
      return "Number larger than Three";
  }
}

function printMessage(message: string | number): void {
  console.log(message);
}

/***** Interface *****/
interface carInterface {
  make: string;
  model: string;
  year: number;
  readonly chassisNo: number;
  carpets?: boolean; // Optional property
}
const mustang: carInterface = {
  make: "Ford",
  model: "Shelby",
  year: 2020,
  chassisNo: 10000,
};
// mustang.chassisNo = 20000; // Output: Error

/***** Classes *****/
interface PersonInterface {
  id: number;
  name: string;
  age: number;
  introducePerson(): string; // Return type string
}

class Person implements PersonInterface {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  introducePerson() {
    return `Hi. I am ${this.name}. I am ${this.age} years old.`;
  }
}
const siri = new Person(1, "Siri", 70);

class Student extends Person {
  fieldOfStudy: string;

  constructor(id: number, name: string, age: number, fieldOfStudy: string) {
    super(id, name, age);
    this.fieldOfStudy = fieldOfStudy;
  }
}
const saji = new Student(2, "Saji", 65, "Drama");

/***** Generics *****/
//Problem Definition
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}
let numArray = getArray([2, 4, 9, 16, 32]);
let strArray = getArray(['NY', 'CA', 'LA']);
numArray.push('AL');
// Problem ==> String can be pushed to numArray because getArray accepts
// items of any type.
// Solution ==> Use generics
function getArray1<T>(items: T[]): T[]{
    return new Array(). concat(items);
}
let numArray1 = getArray1<number>([2, 4, 9, 16, 32]);
let strArray1 = getArray1<string>(['NY', 'CA', 'LA']);
// numArray1.push('AL'); // Output : Error

/***** Usage in React Apps *****/
// export interface Props {
//     text: string
//     color?: string
// }
// const TestComponent = (props: Props) => {
//     return(
//         <p style={{color: props.color ? props.color : 'yellow'}}>
//             {props.text}
//         </p>
//     )
// }
// // Using the component
// const MainComponent = () => {
//     return (
//         <Footer>
//             <TestComponent text="Saji" color="green"/>
//         </Footer>
//     )
// }


