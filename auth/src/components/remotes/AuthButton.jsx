import { mountButton } from 'core/CoreApp'
import { useRef, useEffect } from "react"


const AuthButton = ({ handleOnClick, text }) => {

    const ref = useRef(null)


    useEffect(() => {

        mountButton(ref.current, handleOnClick, text) 

    }, [])

    return (
        <>
            <div ref={ref} />
        </>
    )
}

export default AuthButton
