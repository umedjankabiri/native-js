import {CourseProps} from "common/types/CourseProps.ts";

export const ages = [18, 20, 22, 1, 100, 90, 14];
export const predicate = (age: number) => age > 90;

export const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]
export const chipPredicate = (course: CourseProps) => course.price < 160
export const tasks = [
    {id: 1, title: "Bread", isDone: false},
    {id: 2, title: "Milk", isDone: true},
    {id: 3, title: "Sold", isDone: false},
    {id: 4, title: "Sugar", isDone: true},
]