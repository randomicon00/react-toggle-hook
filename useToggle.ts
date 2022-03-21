import { useState } from 'react'

const useToggle = (initialValue = false) => {
    const [value, setValue] = useState<boolean>(initialValue)
    return [
        flag,
        {
            // Most likely never needed.
            set: setValue,
            // The actual toggle function.
            toggle: (event) => {
                event.preventDefault()
                setValue((flag) => !flag)
            },
        },
    ]
}

export default useToggle

