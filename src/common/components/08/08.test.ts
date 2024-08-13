import {increaseAge, user} from "common/components/08/08.ts";

test("reference type test to verify age mutation", ()=> {
    increaseAge(user)
    const newUser = user

    expect(user.age).toBe(33)

    newUser.age = 1000

    expect(newUser.age).toBe(1000)
    expect(user.age).toBe(1000)
})
test("Add array reference test to verify item addition", ()=> {
    const users = [
        user,
        {name: "Zahid", age: 37},
        {name: "Shahid", age: 37}
    ]
    const newUser = users
    newUser.push({name: "Muhammad", age: 6})

    expect(users[users.length - 1]).toEqual({name: "Muhammad", age: 6})
})