import {FC, useState} from "react";
import {ManComponentProps} from "common/types/ManComponentProps.ts";

//inside useState hook
// function useMyState(m: string) {
//     return [m, function (){}]
// }

export const ManComponent: FC<ManComponentProps> = ({title, man: {name}, ...props}) => {
    // const {title, man: {name}} = props
    // const {title, man, ...restProps} = props
    const [message, setMessage] = useState('Hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {name}
            </div>
            <div>
                {props.car?.model}
            </div>
            <div>
                {props.food}
            </div>
        </div>
    )
}