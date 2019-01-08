"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        //1번위에 name은 this.name이고 그 this.name은 =name과 같다고 선언하고 있다(constructor에서(생성자) 선언하는 name)                        
        this.age = age;
    }
}
const lynn = new Human("minlynn", 18, "female");
const sayhi = (person) => {
    return `${person.name}${person.age}${person.gender}`;
};
console.log(sayhi(lynn));
//# sourceMappingURL=index.js.map