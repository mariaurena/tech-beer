import { mount } from 'menu/MenuApp'
import { useRef, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const MenuApp = ({ onRouteChange }) => {

    const ref = useRef(null)
    const navigate = useNavigate()


    useEffect(() => {

        mount(ref.current, {
            onRouteChange: (path) => {       
                navigate(path)
            }
       });

    }, [])

    return <div ref={ref} />
}

export default MenuApp
