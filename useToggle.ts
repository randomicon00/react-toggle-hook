import { useState } from 'react'

const useToggle = (initialValue = false) => {
    const [flag, setFlag] = useState<boolean>(initialValue)
    return [
        flag,
        {
            // Most likely never needed.
            set: setFlag,
            // The actual toggle function.
            toggle: (event: React.MouseEvent) => {
                event.preventDefault()
                setFlag((value) => !value)
            },
        },
    ]
}

export default useToggle

