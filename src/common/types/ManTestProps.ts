export type ManTestProps = {
    name: string
    age: number
    lessons: LessonTestProps[]
    address: string
}
type LessonTestProps = {
    title: string
    name?: string
}
