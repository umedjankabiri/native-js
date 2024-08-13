import {ChangeEvent, MouseEvent} from 'react'

export const User = ()=> {
    const search = (event: MouseEvent<HTMLButtonElement>): void => {
        console.log("clicked delete" + event.currentTarget.value);
    }
    const onNameChanged = ()=> {
        console.log("name changed")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>): void => {
        console.log("age changed: " + event.currentTarget.value)
    }
    const focusLostHandler = ()=> {
        console.log("focus lost")
    }

    return  (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dmitry</textarea>
            <input type="number" onChange={onAgeChanged}/>

            <button name="delete" onClick={search}>search</button>
        </div>
    )
}