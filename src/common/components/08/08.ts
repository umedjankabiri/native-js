import {UsersProps} from "common/types/UsersProps.ts";

export const user: UsersProps = {
    name: "Umedjan",
    age: 32,
    address: {
        street: "Selim",
    }
}
export const increaseAge = (u: UsersProps)=> {
    u.age++
}