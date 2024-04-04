import { mount } from 'ventas/VentasApp'
import { useRef, useEffect } from "react"

import MenuApp from './MenuApp'

const VentasApp = () => {

    const ref = useRef(null)

    useEffect(() => {

        mount(ref.current)
        
    }, [])

    return (
        <>
            <MenuApp />
            <div ref={ref} />
        </>
    )
}

export default VentasApp
