"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Student_year, _Example_instances, _Example_somePrivateMethod;
class Person {
    constructor(name) {
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hi I'm ${this.name}`);
    }
}
const giles = new Person('Giles');
giles.introduceSelf();
class Professor extends Person {
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }
    introduceSelf() {
        console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }
    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}
const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();
walsh.grade('my paper');
class Student extends Person {
    constructor(name, year) {
        super(name);
        _Student_year.set(this, void 0);
        __classPrivateFieldSet(this, _Student_year, year, "f");
    }
    introduceSelf() {
        console.log(`Hi I'm ${this.name}, and I'm in year ${__classPrivateFieldGet(this, _Student_year, "f")}.`);
    }
    canStudyArchery() {
        return __classPrivateFieldGet(this, _Student_year, "f") > 1;
    }
}
_Student_year = new WeakMap();
const summers = new Student('Summers', 2);
summers.introduceSelf();
summers.canStudyArchery();
class Example {
    constructor() {
        _Example_instances.add(this);
    }
    somePublicMethod() {
        __classPrivateFieldGet(this, _Example_instances, "m", _Example_somePrivateMethod).call(this);
    }
}
_Example_instances = new WeakSet(), _Example_somePrivateMethod = function _Example_somePrivateMethod() {
    console.log('You called me?');
};
const myExample = new Example();
myExample.somePublicMethod();
