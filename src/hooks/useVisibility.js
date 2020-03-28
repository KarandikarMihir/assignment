import { useState } from 'react'

const useVisibility = (defaultState = false) => {
    const [isVisible, set] = useState(defaultState)
    const show = () => set(true)
    const hide = () => set(false)

    return {
        isVisible,
        show,
        hide
    }

}

export default useVisibility