import {addition} from "common/components/01/01.ts";

test("addition should be correct value", () => {
    const a: number = 10;
    const b: number = 10;
    const result = addition(a, b);

    expect(result).toBe(20);
})