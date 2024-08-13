import {StudentProps} from "common/types/TestsProps.ts";
import {addSkill, makeStudentActive} from "common/components/03/03.ts";

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
test("a new tech skill should be added to the student", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "React")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("React")
    expect(student.technologies[3].id).toBeDefined();
})
test("the student should be active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})