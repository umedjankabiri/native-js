import {addition, multiply} from "common/components/01/01.ts";

let a: number;
let b: number;

beforeEach(()=> {
    a = 10;
    b = 10;
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