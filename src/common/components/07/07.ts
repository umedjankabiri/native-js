import {UserProps} from "common/types/UserProps.ts";

export const userObj = {
    '0': "Dmitry",
    '1': "Natasha",
    '2': "Valeriy",
    '3': "Katya"
}
export const users: UserProps = {
    '111': {id: 101, name: "Dmitry"},
    '222': {id: 102, name: "Natasha"},
    '333': {id: 103, name: "Valeriy"},
    '444': {id: 104, name: "Katya"}
}
let user = {id: 105, name: "Igor"}
users['555'] = user
delete users['555']
export const usersArray = [
    {id: 101, name: "Dmitry"},
    {id: 102, name: "Natasha"},
    {id: 103, name: "Valeriy"},
    {id: 104, name: "Katya"}
]
