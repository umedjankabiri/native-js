import {ManProps} from "common/types/ManProps.ts";
import {createGreetingMessage} from "common/components/05/05.ts";

let people: ManProps[]

beforeEach(()=> {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18}
    ];
})

test("Get an array of greeting messages.", ()=> {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe(`Hello ${people[0].name.split(' ')[0]}! Welcome to IT-Incubator`)
    expect(messages[1]).toBe(`Hello ${people[1].name.split(' ')[0]}! Welcome to IT-Incubator`)
    expect(messages[2]).toBe(`Hello ${people[2].name.split(' ')[0]}! Welcome to IT-Incubator`)
})