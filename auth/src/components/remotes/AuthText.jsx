import { mountText } from 'core/CoreApp'
import { useRef, useEffect } from "react"


const AuthText = ({ id, label, name, autoComplete }) => {

    const ref = useRef(null)


    useEffect(() => {

        mountText(ref.current, id, label, name, autoComplete) 

    }, [])

    return (
        <>
            <div ref={ref} />
        </>
    )
}

export default AuthText
