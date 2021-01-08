import { sum } from "./util";
import "../../client-react/src/app";

const name = "Abu Adnaan";
console.log("hello from app.js --- client");
const obj = {
  name,
  age: 101,
};
console.log(sum(23, 2), "==============sum================", name);

class Animal {
  name = "fatty";
}

console.log(new Animal());
