import {StudentProps} from "common/types/TestsProps.ts";

const man: StudentProps = {
    id: 1,
    name: 'Kabiri',
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