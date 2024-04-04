import { mountIcon } from 'core/CoreApp'
import { useRef, useEffect } from "react"


const AuthIcon = () => {

    const ref = useRef(null)


    useEffect(() => {

        mountIcon(ref.current) 

    }, [])

    return (
        <>
            <div ref={ref} />
        </>
    )
}

export default AuthIcon
