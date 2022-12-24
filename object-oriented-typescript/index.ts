class Person {
    name:string;
    constructor(name:string) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi I'm ${this.name}`)
    }
}

const giles = new Person('Giles');

giles.introduceSelf();

class Professor extends Person {
    teaches;

    constructor(name:string, teaches:string) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }

    grade(paper:string) {
        const grade = Math.floor(Math.random()*(5 - 1) + 1)
        console.log(grade);
        
    }
}

const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();

walsh.grade('my paper');

class Student extends Person {
    #year;
    constructor(name:string, year:number) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`Hi I'm ${this.name}, and I'm in year ${this.#year}.`);
    }

    canStudyArchery() {
        return this.#year > 1;
    }
}

const summers = new Student('Summers', 2);

summers.introduceSelf();
summers.canStudyArchery();

class Example {
    somePublicMethod() {
        this.#somePrivateMethod();
    }

    #somePrivateMethod() {
        console.log('You called me?');
    }
}

const myExample = new Example();

myExample.somePublicMethod();