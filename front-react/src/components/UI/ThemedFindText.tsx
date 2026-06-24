import { useState } from "react"
import ThemedInput from "./ThemedInput"


const ThemedFindText = ({onChange, ...props}) => {

    const [value, setValue] = useState('')

    const changeHandle = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    } 

    return (
        <ThemedInput 
            type='input'
            value={value}
            onChange={changeHandle}
            {...props}
        >
            Поиск
        </ThemedInput>
    )
}

export default ThemedFindText