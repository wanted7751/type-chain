class Human {
    public name: string;
    //1
    public age: number;
    // 만약 public 이 아니고  privagte 이면 human 클래스 안에서만 사용가능 한데
    // 아래에서 person.age 밖에서 불러주므로 오류가 날 것이다. 
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name; 
//1번위에 name은 this.name이고 그 this.name은 =name과 같다고 선언하고 있다(constructor에서(생성자) 선언하는 name)                        
        this.age = age;
        }
}


const lynn = new Human("minlynn", 18, "female");

const sayhi = (person:Human): string => {
 return `${person.name}${person.age}${person.gender}`
}

console.log(sayhi(lynn));





export{}; 