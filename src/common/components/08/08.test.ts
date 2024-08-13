import {increaseAge, user} from "common/components/08/08.ts";

test("reference type test to verify age mutation", ()=> {
    increaseAge(user)
    const newUser = user

    expect(user.age).toBe(33)

    newUser.age = 1000

    expect(newUser.age).toBe(1000)
    expect(user.age).toBe(1000)
})
