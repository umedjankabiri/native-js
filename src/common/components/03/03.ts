import {StudentProps} from "common/types/TestsProps.ts";

export const addSkill = (student: StudentProps, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}