interface Human{
    name:string;
    age:number;
    gender:string;
}

const person = {
    name:"nicolas",
    gender:"male",
    age:22
}


const sayhi = (person:Human): string => {
 return `${person.name}${person.age}${person.gender}`
}

console.log(sayhi(person));





export{}; 