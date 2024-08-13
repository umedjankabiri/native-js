import {ManTestProps} from "common/types/ManTestProps.ts";
let props: ManTestProps

beforeEach(() => {
    props = {
        name: "Umedjan",
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: "react"}],
        address: {
            street: {
                title: 'Selim sk.'
            }
        }
    }
})
