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

test("The props object should be destructured in the component", () => {
    // const age = props.age
    // const lessons = props.lessons
    const a = props.age
    const l = props.lessons

    const {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32);
    expect(lessons.length).toBe(3);
    expect(a).toBe(32);
    expect(l.length).toBe(3);
    expect(title).toBe('Selim sk.');
})
