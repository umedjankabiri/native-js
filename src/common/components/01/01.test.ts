import {addition, multiply, splitIntoWords} from "common/components/01/01.ts";

let a: number;
let b: number;
let sentence1: string
let sentence2: string

beforeEach(()=> {
    a = 10;
    b = 10;
    sentence1 = "Hello world"
    sentence2 = "CPP JS SWIFT KOTLIN"
})

test("addition should be correct value", () => {
    const result = addition(a, b);

    expect(result).toBe(20);
})
test("multiply should be correct value", () => {
    let result1 = multiply(a, b);

    expect(result1).toBe(100);

    b = 2;
    let result2 = multiply(a, b);

    expect(result2).toBe(20);
})
test("splitting into words should be correct", ()=> {
    const result1 = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);

    expect(result1.length).toBe(2);
    expect(result1[0]).toBe('Hello');
    expect(result1[1]).toBe('world');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('CPP');
    expect(result2[1]).toBe('JS');
    expect(result2[2]).toBe('SWIFT');
    expect(result2[3]).toBe('KOTLIN');
})