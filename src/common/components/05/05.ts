import {ManProps} from "common/types/ManProps.ts";

const people: ManProps[] = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const dmitryTransformer = (man: ManProps) => ({
    stack: ["HTML", "CSS", "Java Script", "Type script", "React"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})

export const devs1 = [
    {
        stack: ["HTML", "CSS", "Java Script", "Type script", "React"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["HTML", "CSS", "Java Script", "Type script", "React"],
        firstName: "Alexander", lastName: "Petrov"
    },
    {
        stack: ["HTML", "CSS", "Java Script", "Type script", "React"],
        firstName: "Dmitry", lastName: "Sidorov"
    },
]

export const devs2 = [
    dmitryTransformer(people[0]),
    dmitryTransformer(people[1]),
    dmitryTransformer(people[2])
]
export const devs3 = people.map(man => man.name)
export const devs4 = people.map(man => ({
    stack: ["HTML", "CSS", "Java Script", "Type script", "React"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

export const messages = people.map(man =>
    `Hello ${man.name.split(' ')[0]}! Welcome to IT-Incubator`)
export const createGreetingMessage = (people: ManProps[]) => people
    .map(man => `Hello ${man.name.split(' ')[0]}! Welcome to IT-Incubator`)
