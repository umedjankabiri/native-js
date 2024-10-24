import {ManTestProps} from "common/types/ManTestProps.ts";

export type ManComponentProps = {
    title: string
    man: ManTestProps
    food?: string[]
    car?: ModelProps
}
type ModelProps = {
    model: string
}