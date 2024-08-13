import {increaseAge, user} from "common/components/08/08.ts";
import {UsersProps} from "common/types/UsersProps.ts";

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
test("Add value type test to verify variable immutability", ()=> {
    const usersCount = 3
    let newUsersCount = 1

    newUsersCount++

    expect(newUsersCount).toBe(2)
    expect(usersCount).toBe(3)
})
test("Add reference type object test to verify shared address mutation", ()=> {
    let newUser: UsersProps = {
        name: "Leyla",
        age: 32,
        address: user.address
    }
    newUser.address && (newUser.address.street = "New Street")

    expect(user.address).toBe(newUser.address)
    expect(user.address?.street).toBe("New Street")
})
test("Add reference type array test to verify shared object mutation", ()=> {
    let newUser: UsersProps = {
        name: "Leyla",
        age: 32,
        address: user.address
    }
    const newUsers = [user, newUser, {name: "Yusuf", age: 1, address: user.address}]
    const newArrayUsers = [user, newUser]
    newArrayUsers[0].name = "Umedjan Kabiri"

    expect(newUsers[0].name).toEqual("Umedjan Kabiri")
})