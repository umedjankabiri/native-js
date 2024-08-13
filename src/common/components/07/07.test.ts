import {UserProps} from "common/types/UserProps.ts";

let users: UserProps

beforeEach(()=> {
    users = {
        '111': {id: 101, name: "Dmitry"},
        '222': {id: 102, name: "Natasha"},
        '333': {id: 103, name: "Valeriy"},
        '444': {id: 104, name: "Katya"}
    }
})

test("should update corresponding user", ()=> {
    users['444'].name = "Ekaterina"
    expect(users['444'].name).toBe("Ekaterina")
    expect(users['444']).toEqual({id: 104, name: "Ekaterina"})
})
test("should added corresponding user", ()=> {
    users['555'] = {id: 105, name: "Victor"}
    expect(users['555'].name).toBe("Victor")
    expect(users['555']).toEqual({id: 105, name: "Victor"})
})
