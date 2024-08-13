import {StudentProps} from "common/types/TestsProps.ts";

export const addSkill = (student: StudentProps, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
export function makeStudentActive(student: StudentProps) {
    student.isActive = true;
}
export const doesStudentLiveIn = (student: StudentProps, city: string) => {
    return student.address.city.title === city
}