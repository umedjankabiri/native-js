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
test("The array should be destructured", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    // const [, lsn2] = props.lessons
    const [lsn1, ...restLessons1] = props.lessons
    const [, lsn2, ...restLessons2] = props.lessons
    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    expect(lsn1.title).toBe('1')
    expect(lsn2.title).toBe('2')
    expect(restLessons1.length).toBe(2)
    expect(restLessons1[0].title).toBe('2')
    expect(restLessons1[0]).toStrictEqual({title: '2'})
    expect(restLessons1[1]).toStrictEqual({title: '3', name: "react"})
    expect(restLessons1[1]).toStrictEqual({name: "react", title: '3'}) // key and value was swapped
    expect(restLessons2.length).toBe(1)
    expect(restLessons2[0].title).toBe('3')
})