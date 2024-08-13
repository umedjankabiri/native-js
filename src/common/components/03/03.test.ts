import {StudentProps} from "common/types/TestsProps.ts";

let student: StudentProps;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Umedjan',
        age: 37,
        isActive: false,
        address: {
            country: 'Turkey',
            city: {
                title: 'Istanbul',
                street: 'Selim'
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JS"
            }
        ],
    }
})