"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "nicolas",
    gender: "male",
    age: 22
};
const sayhi = (person) => {
    return `${person.name}${person.age}${person.gender}`;
};
console.log(sayhi(person));
//# sourceMappingURL=index.js.map